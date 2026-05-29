import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-plantain">Oba Rere</span>{" "}
              <span className="text-jollof">Bites</span>
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Bold flavours. Big energy. Delivered fast to Portsmouth students.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-plantain">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/menu", label: "Menu" },
                { href: "/party-orders", label: "Party Orders" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-plantain transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-plantain">Connect</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="https://instagram.com/ObaRereBites" target="_blank" rel="noopener noreferrer" className="hover:text-plantain transition-colors">
                  Instagram: @ObaRereBites
                </a>
              </li>
              <li>
                <a href="https://tiktok.com/@ObaRereBites" target="_blank" rel="noopener noreferrer" className="hover:text-plantain transition-colors">
                  TikTok: @ObaRereBites
                </a>
              </li>
              <li>WhatsApp ordering available</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} Oba Rere Bites. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
