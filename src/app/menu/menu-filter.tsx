"use client";

import { useState } from "react";
import MenuCard from "@/components/menu-card";
import type { MenuItem } from "@/lib/menu-data";

type Category = { id: "bowls" | "snacks" | "drinks"; label: string; emoji: string };

export default function MenuFilter({
  items,
  categories,
}: {
  items: MenuItem[];
  categories: Category[];
}) {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setActive("all")}
          className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-colors cursor-pointer ${
            active === "all"
              ? "bg-jollof text-white"
              : "bg-white text-charcoal hover:bg-gray-100"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-colors cursor-pointer ${
              active === cat.id
                ? "bg-jollof text-white"
                : "bg-white text-charcoal hover:bg-gray-100"
            }`}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
