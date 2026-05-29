"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({
  message,
  label = "Order via WhatsApp",
  className = "",
}: {
  message: string;
  label?: string;
  className?: string;
}) {
  const phoneNumber = "447780475030";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-naija hover:bg-naija-light text-white font-semibold px-6 py-3 rounded-lg transition-colors ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {label}
    </a>
  );
}
