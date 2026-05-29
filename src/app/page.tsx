import Link from "next/link";
import { ArrowRight, Clock, Truck, Star, Users } from "lucide-react";
import { menuItems } from "@/lib/menu-data";
import MenuCard from "@/components/menu-card";

export default function HomePage() {
  const popularItems = menuItems.filter((item) =>
    item.tags.includes("popular")
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-jollof" />
          <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-plantain" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-naija" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="max-w-2xl">
            <div className="inline-block bg-jollof/20 text-jollof px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Now delivering in Portsmouth
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Welcome to{" "}
              <span className="text-plantain">Oba Rere</span>{" "}
              <span className="text-jollof">Bites</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              The home of royal Naija goodness. Bold flavours. Big energy.
              Delivered fast to Portsmouth students.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="bg-jollof hover:bg-jollof-dark text-white font-bold px-8 py-4 rounded-lg text-lg flex items-center gap-2 transition-colors"
              >
                Order Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/party-orders"
                className="border-2 border-plantain text-plantain hover:bg-plantain hover:text-charcoal font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                Party Orders
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-lg mx-auto">
            Three easy steps to get bold Naija flavours to your door.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Check the Menu",
                desc: "Browse our weekly Afro-fusion menu",
                icon: Star,
              },
              {
                step: "2",
                title: "Place Your Order",
                desc: "Order online with Stripe or via WhatsApp",
                icon: Clock,
              },
              {
                step: "3",
                title: "Get It Delivered",
                desc: "Fresh to your door or campus, fast",
                icon: Truck,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-xl p-8 text-center shadow-sm"
              >
                <div className="w-14 h-14 bg-jollof/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-jollof" />
                </div>
                <div className="text-sm text-jollof font-bold mb-2">
                  Step {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                Student Favourites
              </h2>
              <p className="text-gray-500">
                The most popular picks on campus.
              </p>
            </div>
            <Link
              href="/menu"
              className="hidden md:flex items-center gap-1 text-jollof font-semibold hover:underline"
            >
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/menu"
              className="text-jollof font-semibold hover:underline inline-flex items-center gap-1"
            >
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Students Love Us */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Why Students Love Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Affordable Bowls", emoji: "💰" },
              { label: "Late-Night Delivery", emoji: "🌙" },
              { label: "Afro-Fusion Flavours", emoji: "🔥" },
              { label: "Weekly Meal Plans", emoji: "📅" },
            ].map((perk) => (
              <div
                key={perk.label}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-3xl mb-3">{perk.emoji}</div>
                <p className="font-semibold">{perk.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Party Orders CTA */}
      <section className="py-20 bg-gradient-to-r from-jollof to-afro-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Planning a Party?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            We cater for student parties, events, and group gatherings. Get
            custom menus and bulk pricing.
          </p>
          <Link
            href="/party-orders"
            className="inline-block bg-white text-jollof font-bold px-8 py-4 rounded-lg text-lg hover:bg-cream transition-colors"
          >
            Get a Party Quote
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-cream text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Oya, come chop!
          </h2>
          <p className="text-gray-500 mb-6">
            Order now and taste the bold flavours of Nigeria.
          </p>
          <Link
            href="/menu"
            className="bg-jollof hover:bg-jollof-dark text-white font-bold px-8 py-4 rounded-lg text-lg inline-flex items-center gap-2 transition-colors"
          >
            Order Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
