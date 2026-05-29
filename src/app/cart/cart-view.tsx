"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle, CreditCard } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

export default function CartView() {
  const { items, updateQuantity, removeItem, clearCart, totalPrice } = useCart();
  const [loading, setLoading] = useState(false);

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">
          Add some bold Naija flavours to get started.
        </p>
        <Link
          href="/menu"
          className="bg-jollof hover:bg-jollof-dark text-white font-bold px-6 py-3 rounded-lg transition-colors inline-block"
        >
          Browse Menu
        </Link>
      </div>
    );
  }

  function buildWhatsAppMessage() {
    const itemLines = items
      .map((i) => `${i.quantity}x ${i.name} (£${(i.price * i.quantity).toFixed(2)})`)
      .join("\n");
    return `Hi Oba Rere Bites! I'd like to order:\n\n${itemLines}\n\nTotal: £${totalPrice.toFixed(2)}`;
  }

  async function handleStripeCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            id: i.id,
            name: i.name,
            price: i.price,
            quantity: i.quantity,
          })),
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert("Something went wrong. Please try again or order via WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-100">
        {items.map((item) => (
          <div key={item.id} className="p-5 flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold truncate">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
              <p className="text-jollof font-bold mt-1">
                £{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center font-semibold text-sm">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-jollof hover:bg-jollof/5 transition-colors ml-1 cursor-pointer"
                aria-label="Remove item"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="bg-white rounded-xl shadow-sm p-5 mt-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-bold text-lg">£{totalPrice.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-400 mb-6">
          Delivery fee calculated at checkout
        </p>

        <div className="space-y-3">
          <button
            onClick={handleStripeCheckout}
            disabled={loading}
            className="w-full bg-jollof hover:bg-jollof-dark disabled:opacity-60 text-white font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <CreditCard className="w-5 h-5" />
            {loading ? "Loading..." : "Pay with Card"}
          </button>

          <a
            href={`https://wa.me/447780475030?text=${encodeURIComponent(buildWhatsAppMessage())}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-naija hover:bg-naija-light text-white font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Order via WhatsApp
          </a>
        </div>

        <button
          onClick={clearCart}
          className="w-full text-gray-400 hover:text-jollof text-sm font-medium mt-4 py-2 transition-colors cursor-pointer"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
