import type { Metadata } from "next";
import { menuItems, categories } from "@/lib/menu-data";
import MenuCard from "@/components/menu-card";
import MenuFilter from "./menu-filter";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse our bold Afro-fusion menu — jollof bowls, snacks, and drinks delivered to Portsmouth students.",
};

export default function MenuPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Menu
          </h1>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Bold Afro-fusion dishes made with love, spice, and culture.
          </p>
        </div>

        <MenuFilter items={menuItems} categories={categories} />
      </div>
    </div>
  );
}
