import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Oba Rere Bites — order via WhatsApp, follow us on social media, or send us a message.",
};

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
          Get in Touch
        </h1>
        <p className="text-gray-500 text-center mb-12 max-w-lg mx-auto">
          Have a question, feedback, or want to place a special order? Reach out
          to us!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Contact Details</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-jollof mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <a
                    href="mailto:hello@obarerebites.co.uk"
                    className="text-gray-500 text-sm hover:text-jollof transition-colors"
                  >
                    hello@obarerebites.co.uk
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-jollof mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">WhatsApp</p>
                  <p className="text-gray-500 text-sm">Available for orders & enquiries</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-jollof mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Delivery Area</p>
                  <p className="text-gray-500 text-sm">Portsmouth & surrounding areas</p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <WhatsAppButton
                message="Hi Oba Rere Bites! I have a question."
                label="Chat on WhatsApp"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Follow Us</h2>
            <div className="space-y-4">
              {[
                {
                  platform: "Instagram",
                  handle: "@ObaRereBites",
                  url: "https://instagram.com/ObaRereBites",
                  color: "bg-pink-500",
                },
                {
                  platform: "TikTok",
                  handle: "@ObaRereBites",
                  url: "https://tiktok.com/@ObaRereBites",
                  color: "bg-charcoal",
                },
              ].map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 hover:bg-cream transition-colors"
                >
                  <div className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {social.platform[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{social.platform}</p>
                    <p className="text-gray-500 text-sm">{social.handle}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 bg-cream rounded-lg p-5">
              <h3 className="font-bold text-sm mb-2">Opening Hours</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Monday - Friday: 11am - 11pm</p>
                <p>Saturday - Sunday: 12pm - 11pm</p>
                <p className="text-jollof font-semibold mt-2">
                  Late-night delivery available!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
