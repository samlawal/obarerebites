import Link from "next/link";
import { ArrowRight, Clock, Truck, Star, Users, Sparkles } from "lucide-react";
import { menuItems } from "@/lib/menu-data";
import HeroSlideshow from "@/components/home/hero-slideshow";
import ScrollReveal from "@/components/home/scroll-reveal";
import AnimatedCounter from "@/components/home/animated-counter";
import FoodCarousel from "@/components/home/food-carousel";

export default function HomePage() {
  const popularItems = menuItems.filter((item) =>
    item.tags.includes("popular")
  );

  return (
    <>
      {/* Dynamic Hero Slideshow */}
      <HeroSlideshow />

      {/* Stats Bar */}
      <section className="bg-charcoal py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter target={500} suffix="+" label="Happy Students" />
            <AnimatedCounter target={11} suffix="" label="Menu Items" />
            <AnimatedCounter target={30} suffix="min" label="Avg Delivery" prefix="<" />
            <AnimatedCounter target={5} suffix="" label="Star Reviews" duration={1} />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-cream polka-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
              How It Works
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-lg mx-auto">
              Three easy steps to get bold Naija flavours to your door.
            </p>
          </ScrollReveal>
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
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.15}>
                <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 bg-jollof/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-jollof" />
                  </div>
                  <div className="text-sm text-jollof font-bold mb-2">
                    Step {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items — Swipeable Carousel */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-plantain" />
                  <span className="text-sm font-bold text-plantain uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  Student Favourites
                </h2>
              </div>
              <Link
                href="/menu"
                className="hidden md:flex items-center gap-1 text-jollof font-semibold hover:underline group"
              >
                View Full Menu{" "}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          <FoodCarousel items={popularItems} />

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
      <section className="py-20 bg-charcoal text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
              Why Students Love Us
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Affordable Bowls", emoji: "💰", desc: "Prices that respect your student budget" },
              { label: "Late-Night Delivery", emoji: "🌙", desc: "Cravings don't follow a schedule" },
              { label: "Afro-Fusion Flavours", emoji: "🔥", desc: "Bold tastes you won't find anywhere else" },
              { label: "Weekly Meal Plans", emoji: "📅", desc: "Save more when you plan ahead" },
            ].map((perk, i) => (
              <ScrollReveal key={perk.label} delay={i * 0.1} direction="up">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-plantain/30 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {perk.emoji}
                  </div>
                  <p className="font-semibold mb-1">{perk.label}</p>
                  <p className="text-sm text-white/50">{perk.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Party Orders CTA */}
      <section className="py-20 bg-gradient-to-r from-jollof to-afro-orange text-white relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/5 rounded-full animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal>
            <Users className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Planning a Party?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              We cater for student parties, events, and group gatherings. Get
              custom menus and bulk pricing.
            </p>
            <Link
              href="/party-orders"
              className="inline-block bg-white text-jollof font-bold px-8 py-4 rounded-lg text-lg hover:bg-cream transition-all hover:scale-105 hover:shadow-xl"
            >
              Get a Party Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream polka-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
              What Students Say
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Adaeze O.",
                course: "Business Studies",
                text: "Best jollof in Portsmouth, hands down. Tastes just like home!",
                rating: 5,
              },
              {
                name: "James K.",
                course: "Computer Science",
                text: "Late night delivery is a lifesaver during exam season. The puff-puff is incredible.",
                rating: 5,
              },
              {
                name: "Fatima A.",
                course: "Nursing",
                text: "Ordered for our society event — everyone loved it. Great prices for groups too.",
                rating: 5,
              },
            ].map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 0.15} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <span key={j} className="text-plantain text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed italic">
                    &quot;{review.text}&quot;
                  </p>
                  <div>
                    <p className="font-bold text-sm">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.course}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-charcoal text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Oya, come chop!
            </h2>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Order now and taste the bold flavours of Nigeria — delivered
              straight to your door.
            </p>
            <Link
              href="/menu"
              className="bg-jollof hover:bg-jollof-dark text-white font-bold px-8 py-4 rounded-lg text-lg inline-flex items-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-jollof/30 group"
            >
              Order Now{" "}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
