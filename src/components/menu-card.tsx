"use client";

import { Plus, Flame } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import type { MenuItem } from "@/lib/menu-data";

export default function MenuCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-bold text-lg text-charcoal">{item.name}</h3>
        {item.tags.includes("spicy") && (
          <Flame className="w-5 h-5 text-jollof shrink-0" />
        )}
      </div>

      <p className="text-gray-500 text-sm mb-4 flex-1">{item.description}</p>

      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-charcoal">
          £{item.price.toFixed(2)}
        </span>
        <button
          onClick={() => addItem(item)}
          className="bg-jollof hover:bg-jollof-dark text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      {item.tags.includes("popular") && (
        <span className="mt-3 inline-block self-start bg-plantain/20 text-afro-orange text-xs font-semibold px-2.5 py-1 rounded-full">
          Student Favourite
        </span>
      )}
    </div>
  );
}
