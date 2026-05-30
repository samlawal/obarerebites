"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1665332195309-9d75071138f0?w=1400&h=800&fit=crop&q=80",
    line1: "Royal Naija",
    line2: "Goodness",
    subtitle: "Bold jollof. Smoky suya. Delivered fast to Portsmouth students.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603496987674-79600a000f55?w=1400&h=800&fit=crop&q=80",
    line1: "Afro-Fusion",
    line2: "Flavours",
    subtitle:
      "Traditional recipes with a modern twist — taste Nigeria on every plate.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=1400&h=800&fit=crop&q=80",
    line1: "Feast Like",
    line2: "Royalty",
    subtitle:
      "From egusi to puff-puff, every dish is cooked with love and spice.",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[70vh] min-h-[500px] md:h-[85vh] md:min-h-[600px] max-h-[800px] overflow-hidden bg-charcoal">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].line1}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/75 sm:bg-charcoal/60 md:bg-transparent md:bg-gradient-to-r md:from-charcoal/90 md:via-charcoal/60 md:to-charcoal/30" />
        </motion.div>
      </AnimatePresence>

      {/* Floating food elements — hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {["🍛", "🔥", "🍗", "👑", "🌶️"].map((emoji, i) => (
          <motion.div
            key={emoji}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block bg-jollof/20 backdrop-blur-sm text-jollof px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 border border-jollof/30"
          >
            Now delivering in Portsmouth
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-3 md:mb-6">
                <span className="text-plantain">{slides[current].line1}</span>
                <br />
                <span className="text-jollof">{slides[current].line2}</span>
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed max-w-lg">
                {slides[current].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/menu"
              className="group bg-jollof hover:bg-jollof-dark text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-jollof/30"
            >
              Order Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/party-orders"
              className="border-2 border-plantain text-plantain hover:bg-plantain hover:text-charcoal font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg transition-all hover:scale-105 text-center"
            >
              Party Orders
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
              i === current
                ? "w-8 bg-plantain"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
