"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ShoppingBag, X, Check } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export default function CartToast() {
  const { items, totalItems, totalPrice } = useCart();
  const [show, setShow] = useState(false);
  const [lastAdded, setLastAdded] = useState<string | null>(null);
  const [prevCount, setPrevCount] = useState(totalItems);

  const handleShow = useCallback(() => {
    if (totalItems > prevCount && items.length > 0) {
      const newest = items[items.length - 1];
      // Check if the last item's quantity increased or a new item was added
      setLastAdded(newest?.name || "Item");
      setShow(true);
    }
    setPrevCount(totalItems);
  }, [totalItems, prevCount, items]);

  useEffect(() => {
    handleShow();
  }, [handleShow]);

  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => setShow(false), 4000);
    return () => clearTimeout(timer);
  }, [show, lastAdded]);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-96 z-50 animate-slide-up">
      <div className="bg-charcoal text-white rounded-xl shadow-2xl p-4 flex items-center gap-3 border border-white/10">
        <div className="w-10 h-10 bg-naija/20 rounded-full flex items-center justify-center shrink-0">
          <Check className="w-5 h-5 text-naija" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm truncate">{lastAdded} added!</p>
          <p className="text-xs text-white/60">
            {totalItems} item{totalItems !== 1 ? "s" : ""} — £{totalPrice.toFixed(2)}
          </p>
        </div>
        <Link
          href="/cart"
          className="bg-jollof hover:bg-jollof-dark text-white text-xs font-bold px-3 py-2 rounded-lg shrink-0 transition-colors flex items-center gap-1.5"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          View Cart
        </Link>
        <button
          onClick={() => setShow(false)}
          className="text-white/40 hover:text-white transition-colors shrink-0 cursor-pointer"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
