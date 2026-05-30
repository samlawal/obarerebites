"use client";

import Image from "next/image";
import { Plus, Flame } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { useCustomImages } from "@/lib/use-custom-images";
import type { MenuItem } from "@/lib/menu-data";

export default function MenuCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();
  const customImages = useCustomImages();
  const customUrl = customImages[item.id];
  const imageSrc = customUrl || item.image;
  const imageClass = customUrl ? "object-cover" : `object-cover ${item.imageStyle || ""}`;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={item.name}
          fill
          className={imageClass}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {item.tags.includes("spicy") && (
          <span className="absolute top-3 right-3 bg-jollof/90 text-white p-1.5 rounded-full">
            <Flame className="w-4 h-4" />
          </span>
        )}
        {item.tags.includes("popular") && (
          <span className="absolute top-3 left-3 bg-plantain text-charcoal text-xs font-bold px-2.5 py-1 rounded-full">
            Student Favourite
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-lg text-charcoal mb-1">{item.name}</h3>
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
      </div>
    </div>
  );
}
