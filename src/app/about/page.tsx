import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Oba Rere Bites — bringing bold Nigerian street food flavours to Portsmouth students with modern Afro-fusion style.",
};

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
          About <span className="text-plantain">Oba Rere</span>{" "}
          <span className="text-jollof">Bites</span>
        </h1>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm space-y-6 text-gray-600 leading-relaxed">
          <p className="text-lg">
            Oba Rere Bites was created to bring the bold, colourful flavours of
            Nigerian street food to Portsmouth students. Our name blends{" "}
            <strong className="text-charcoal">royalty (Oba)</strong> and{" "}
            <strong className="text-charcoal">goodness (Rere)</strong> — a
            promise that every meal delivers flavour, comfort, and energy.
          </p>

          <p>
            We cook with love, spice, and culture — and serve it with modern
            Afro-fusion style. Whether you&apos;re craving a classic jollof bowl
            after a late lecture or planning a party spread for your flatmates,
            we&apos;ve got you covered.
          </p>

          <div className="border-l-4 border-jollof pl-6 py-2">
            <p className="text-lg font-semibold text-charcoal italic">
              &quot;Bold flavours. Big energy. Delivered fast.&quot;
            </p>
          </div>

          <h2 className="text-2xl font-extrabold text-charcoal pt-4">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Authentic Flavour", desc: "Real Nigerian recipes, real spice, real taste." },
              { title: "Student Affordability", desc: "Prices that respect your budget." },
              { title: "Cultural Pride", desc: "Celebrating Yoruba and Nigerian food culture." },
              { title: "Fast Delivery", desc: "Hot food to your door, fast." },
            ].map((value) => (
              <div key={value.title} className="bg-cream rounded-lg p-4">
                <h3 className="font-bold text-charcoal mb-1">{value.title}</h3>
                <p className="text-sm">{value.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-6 text-center">
            <Link
              href="/menu"
              className="bg-jollof hover:bg-jollof-dark text-white font-bold px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors"
            >
              Explore Our Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
