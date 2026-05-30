import { NextResponse } from "next/server";
import { put, list, del } from "@vercel/blob";
import sharp from "sharp";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "obarere2026";
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function checkAuth(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
    return false;
  }
  return true;
}

// GET — list all custom images (current + rollback)
export async function GET(request: Request) {
  if (!checkAuth(request)) return unauthorized();

  try {
    const { blobs } = await list({ prefix: "dishes/" });
    const images: Record<string, { current?: string; previous?: string }> = {};

    for (const blob of blobs) {
      // Pattern: dishes/{dishId}/current.webp or dishes/{dishId}/previous.webp
      const parts = blob.pathname.split("/");
      if (parts.length >= 3) {
        const dishId = parts[1];
        const type = parts[2].replace(".webp", "");
        if (!images[dishId]) images[dishId] = {};
        if (type === "current") images[dishId].current = blob.url;
        if (type === "previous") images[dishId].previous = blob.url;
      }
    }

    return NextResponse.json({ images });
  } catch {
    return NextResponse.json({ images: {} });
  }
}

// POST — upload a new image for a dish
export async function POST(request: Request) {
  if (!checkAuth(request)) return unauthorized();

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const dishId = formData.get("dishId") as string | null;

    if (!file || !dishId) {
      return NextResponse.json(
        { error: "Missing file or dishId" },
        { status: 400 }
      );
    }

    // Validate file type
    const validTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/heic",
      "image/heif",
    ];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Use JPG, PNG, WebP, or HEIC." },
        { status: 400 }
      );
    }

    // Validate size
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: "File too large. Maximum 10MB." },
        { status: 400 }
      );
    }

    // Convert to buffer and process with sharp
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const processed = await sharp(buffer)
      .resize(800, 600, { fit: "cover", position: "center" })
      .webp({ quality: 82 })
      .toBuffer();

    // Move current to previous (rollback)
    try {
      const { blobs } = await list({ prefix: `dishes/${dishId}/current` });
      if (blobs.length > 0) {
        // Download current image
        const currentBlob = blobs[0];
        const currentResponse = await fetch(currentBlob.url);
        const currentBuffer = Buffer.from(await currentResponse.arrayBuffer());

        // Delete old previous if exists
        const { blobs: prevBlobs } = await list({
          prefix: `dishes/${dishId}/previous`,
        });
        for (const prev of prevBlobs) {
          await del(prev.url);
        }

        // Save current as previous
        await put(`dishes/${dishId}/previous.webp`, currentBuffer, {
          access: "public",
          contentType: "image/webp",
          addRandomSuffix: false,
        });

        // Delete old current
        await del(currentBlob.url);
      }
    } catch {
      // No existing image — that's fine
    }

    // Upload new current
    const blob = await put(`dishes/${dishId}/current.webp`, processed, {
      access: "public",
      contentType: "image/webp",
      addRandomSuffix: false,
    });

    return NextResponse.json({
      url: blob.url,
      dishId,
      size: processed.length,
    });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json(
      { error: "Failed to process image" },
      { status: 500 }
    );
  }
}

// PUT — rollback to previous image
export async function PUT(request: Request) {
  if (!checkAuth(request)) return unauthorized();

  try {
    const { dishId } = await request.json();
    if (!dishId) {
      return NextResponse.json(
        { error: "Missing dishId" },
        { status: 400 }
      );
    }

    // Check if previous exists
    const { blobs: prevBlobs } = await list({
      prefix: `dishes/${dishId}/previous`,
    });
    if (prevBlobs.length === 0) {
      return NextResponse.json(
        { error: "No previous image to roll back to" },
        { status: 404 }
      );
    }

    // Download previous
    const prevResponse = await fetch(prevBlobs[0].url);
    const prevBuffer = Buffer.from(await prevResponse.arrayBuffer());

    // Delete current
    const { blobs: currentBlobs } = await list({
      prefix: `dishes/${dishId}/current`,
    });
    for (const curr of currentBlobs) {
      await del(curr.url);
    }

    // Move previous to current
    const blob = await put(`dishes/${dishId}/current.webp`, prevBuffer, {
      access: "public",
      contentType: "image/webp",
      addRandomSuffix: false,
    });

    // Delete previous
    await del(prevBlobs[0].url);

    return NextResponse.json({ url: blob.url, dishId });
  } catch (err) {
    console.error("Rollback error:", err);
    return NextResponse.json(
      { error: "Failed to rollback" },
      { status: 500 }
    );
  }
}
