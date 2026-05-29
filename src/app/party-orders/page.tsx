import type { Metadata } from "next";
import { Users, Check } from "lucide-react";
import PartyForm from "./party-form";

export const metadata: Metadata = {
  title: "Party & Bulk Orders",
  description:
    "Planning a party or event? Get custom menus and bulk pricing from Oba Rere Bites for your Portsmouth gathering.",
};

export default function PartyOrdersPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-jollof to-afro-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Party & Bulk Orders
          </h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            From student house parties to society events — we bring the bold
            Naija flavours to your gathering.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-extrabold mb-6">
              Why Choose Us for Your Event?
            </h2>
            <ul className="space-y-4 mb-10">
              {[
                "Custom menus tailored to your group size and preferences",
                "Bulk pricing — the bigger the order, the better the deal",
                "Delivery or pickup options",
                "Dietary accommodations available",
                "Perfect for house parties, society events, and gatherings",
                "Freshers week specials available",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-naija shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Popular Party Packages</h3>
              <div className="space-y-4">
                {[
                  {
                    name: "The Kickback",
                    people: "10-15 people",
                    desc: "Mix of bowls, snacks & drinks",
                    price: "From £70",
                  },
                  {
                    name: "The Link-Up",
                    people: "20-30 people",
                    desc: "Full spread with desserts",
                    price: "From £130",
                  },
                  {
                    name: "The Owambe",
                    people: "40+ people",
                    desc: "The complete feast, custom menu",
                    price: "Custom quote",
                  },
                ].map((pkg) => (
                  <div
                    key={pkg.name}
                    className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-semibold">{pkg.name}</p>
                      <p className="text-sm text-gray-500">
                        {pkg.people} — {pkg.desc}
                      </p>
                    </div>
                    <span className="text-jollof font-bold text-sm whitespace-nowrap ml-4">
                      {pkg.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold mb-2">Get a Quote</h2>
              <p className="text-gray-500 mb-6">
                Fill in the details and we&apos;ll get back to you within 24
                hours.
              </p>
              <PartyForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
