"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Upload,
  RotateCcw,
  Lock,
  Check,
  AlertCircle,
  Loader2,
  ImageIcon,
  LogOut,
} from "lucide-react";
import { menuItems } from "@/lib/menu-data";

type CustomImages = Record<
  string,
  { current?: string; previous?: string }
>;

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [selectedDish, setSelectedDish] = useState(menuItems[0].id);
  const [uploading, setUploading] = useState(false);
  const [rollingBack, setRollingBack] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [customImages, setCustomImages] = useState<CustomImages>({});
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("admin_token") : null;

  useEffect(() => {
    if (token) {
      setAuthed(true);
      setPassword(token);
      loadImages(token);
    }
  }, [token]);

  async function loadImages(pw: string) {
    try {
      const res = await fetch("/api/admin", {
        headers: { Authorization: `Bearer ${pw}` },
      });
      if (res.ok) {
        const data = await res.json();
        setCustomImages(data.images || {});
      }
    } catch {
      // Ignore
    }
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem("admin_token", password);
    setAuthed(true);
    loadImages(password);
  }

  function handleLogout() {
    localStorage.removeItem("admin_token");
    setAuthed(false);
    setPassword("");
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setMessage({ type: "error", text: "File too large. Maximum 10MB." });
      return;
    }

    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  async function handleUpload() {
    const file = fileRef.current?.files?.[0];
    if (!file) return;

    setUploading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("dishId", selectedDish);

    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { Authorization: `Bearer ${password}` },
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({
          type: "success",
          text: `Photo updated! Image optimised to ${Math.round(data.size / 1024)}KB WebP.`,
        });
        setPreview(null);
        if (fileRef.current) fileRef.current.value = "";
        loadImages(password);
      } else {
        setMessage({ type: "error", text: data.error || "Upload failed" });
      }
    } catch {
      setMessage({ type: "error", text: "Network error. Try again." });
    } finally {
      setUploading(false);
    }
  }

  async function handleRollback() {
    setRollingBack(true);
    setMessage(null);

    try {
      const res = await fetch("/api/admin", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${password}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dishId: selectedDish }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Rolled back to previous photo." });
        loadImages(password);
      } else {
        setMessage({ type: "error", text: data.error || "Rollback failed" });
      }
    } catch {
      setMessage({ type: "error", text: "Network error. Try again." });
    } finally {
      setRollingBack(false);
    }
  }

  const selectedItem = menuItems.find((m) => m.id === selectedDish)!;
  const hasCustomImage = !!customImages[selectedDish]?.current;
  const hasPrevious = !!customImages[selectedDish]?.previous;

  // LOGIN SCREEN
  if (!authed) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm"
        >
          <div className="w-14 h-14 bg-jollof/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-7 h-7 text-jollof" />
          </div>
          <h1 className="text-2xl font-extrabold text-center mb-2">
            Admin Access
          </h1>
          <p className="text-gray-500 text-sm text-center mb-6">
            Enter the admin password to manage dish photos.
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-jollof/50 focus:border-jollof"
          />
          <button
            type="submit"
            className="w-full bg-jollof hover:bg-jollof-dark text-white font-bold py-3 rounded-lg transition-colors cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }

  // ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-charcoal text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-jollof rounded-full flex items-center justify-center">
            <ImageIcon className="w-4 h-4" />
          </div>
          <div>
            <h1 className="font-bold text-sm">Oba Rere Bites — Photo Manager</h1>
            <p className="text-xs text-white/50">Upload, optimise & manage dish photos</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="text-white/50 hover:text-white text-sm flex items-center gap-1.5 cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Dish Selector */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <label className="block text-sm font-semibold text-charcoal mb-2">
            Select Dish
          </label>
          <select
            value={selectedDish}
            onChange={(e) => {
              setSelectedDish(e.target.value);
              setPreview(null);
              setMessage(null);
              if (fileRef.current) fileRef.current.value = "";
            }}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-jollof/50 focus:border-jollof"
          >
            {menuItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} — £{item.price.toFixed(2)} ({item.category})
              </option>
            ))}
          </select>
        </div>

        {/* Current Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Default image */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                {hasCustomImage ? "Default (from code)" : "Current Image"}
              </p>
            </div>
            <div className="relative h-48">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                fill
                className={`object-cover ${selectedItem.imageStyle || ""}`}
                sizes="400px"
              />
            </div>
          </div>

          {/* Custom / uploaded image */}
          {hasCustomImage && (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-naija">
              <div className="px-4 py-3 border-b border-naija/20 bg-naija/5">
                <p className="text-xs font-semibold text-naija uppercase tracking-wide flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  Live Custom Photo
                </p>
              </div>
              <div className="relative h-48">
                <Image
                  src={customImages[selectedDish].current!}
                  alt={selectedItem.name}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            </div>
          )}
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Upload className="w-5 h-5 text-jollof" />
            Upload New Photo
          </h2>

          <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center mb-4">
            {preview ? (
              <div className="relative h-48 mx-auto max-w-md rounded-lg overflow-hidden mb-3">
                <Image
                  src={preview}
                  alt="Preview"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            ) : (
              <div className="py-4">
                <ImageIcon className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-gray-500 mb-1">
                  JPG, PNG, WebP, or HEIC — max 10MB
                </p>
                <p className="text-xs text-gray-400">
                  Auto-resized to 800x600 and converted to WebP
                </p>
              </div>
            )}
            <input
              ref={fileRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
              onChange={handleFileSelect}
              className="block mx-auto text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-jollof/10 file:text-jollof hover:file:bg-jollof/20 file:cursor-pointer cursor-pointer"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleUpload}
              disabled={!fileRef.current?.files?.length || uploading}
              className="flex-1 bg-jollof hover:bg-jollof-dark disabled:opacity-40 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer disabled:cursor-not-allowed"
            >
              {uploading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  Upload & Go Live
                </>
              )}
            </button>

            {hasPrevious && (
              <button
                onClick={handleRollback}
                disabled={rollingBack}
                className="bg-plantain/20 hover:bg-plantain/30 text-charcoal font-semibold px-5 py-3 rounded-lg flex items-center gap-2 transition-colors cursor-pointer disabled:opacity-40"
              >
                {rollingBack ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <RotateCcw className="w-4 h-4" />
                )}
                Undo
              </button>
            )}
          </div>
        </div>

        {/* Status Message */}
        {message && (
          <div
            className={`rounded-lg p-4 flex items-start gap-3 mb-6 ${
              message.type === "success"
                ? "bg-naija/10 text-naija"
                : "bg-jollof/10 text-jollof"
            }`}
          >
            {message.type === "success" ? (
              <Check className="w-5 h-5 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            )}
            <p className="text-sm font-medium">{message.text}</p>
          </div>
        )}

        {/* Info */}
        <div className="bg-charcoal/5 rounded-lg p-4 text-xs text-gray-500 space-y-1">
          <p>
            <strong>How it works:</strong> Uploaded photos are auto-optimised
            (800x600 WebP) and stored in the cloud. They go live immediately
            without redeploying the site.
          </p>
          <p>
            Each upload saves the previous photo so you can roll back with one
            click. Default images from the code are always preserved as fallback.
          </p>
        </div>
      </div>
    </div>
  );
}
