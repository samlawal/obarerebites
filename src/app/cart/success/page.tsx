import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Order Confirmed",
};

export default function SuccessPage() {
  return (
    <div className="bg-cream min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 py-16 text-center">
        <CheckCircle className="w-16 h-16 text-naija mx-auto mb-6" />
        <h1 className="text-3xl font-extrabold mb-4">Order Confirmed!</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Thank you for your order. We&apos;re preparing your bold Naija
          flavours right now. You&apos;ll receive a confirmation shortly.
        </p>
        <Link
          href="/menu"
          className="bg-jollof hover:bg-jollof-dark text-white font-bold px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-colors"
        >
          Order More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
