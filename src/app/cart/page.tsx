import type { Metadata } from "next";
import CartView from "./cart-view";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your order and checkout.",
};

export default function CartPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8">Your Cart</h1>
        <CartView />
      </div>
    </div>
  );
}
