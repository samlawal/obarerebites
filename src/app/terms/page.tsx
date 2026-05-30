import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Oba Rere Bites.",
};

export default function TermsPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8">
          Terms &amp; Conditions
        </h1>

        <div className="bg-white rounded-xl p-8 shadow-sm space-y-8 text-gray-600 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">
              1. General
            </h2>
            <p>
              These terms and conditions govern your use of the Oba Rere Bites
              website (obarerebites.co.uk) and any orders placed through it. By
              using this website or placing an order, you agree to be bound by
              these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">
              2. Food Images &amp; Descriptions
            </h2>
            <p>
              All food images displayed on this website are for{" "}
              <strong>illustrative purposes only</strong> and may not be an
              exact representation of the product you receive. While we make
              every effort to accurately depict our dishes, actual portions,
              presentation, and garnishes may vary. Ingredients and recipes may
              be subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">
              3. Pricing
            </h2>
            <p>
              All prices are listed in British Pounds (GBP) and include VAT
              where applicable. We reserve the right to change prices at any
              time without prior notice. Prices displayed at the time of your
              order will be honoured.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">
              4. Ordering &amp; Payment
            </h2>
            <p>
              Orders can be placed via the website (card payment through Stripe)
              or via WhatsApp. All orders are subject to availability. We
              reserve the right to refuse or cancel any order at our discretion.
              Payment must be received before an order is prepared.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">
              5. Delivery
            </h2>
            <p>
              We deliver to Portsmouth and surrounding areas. Delivery times
              are estimates and may vary depending on demand and location. We
              are not liable for delays caused by circumstances beyond our
              control.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">
              6. Allergens &amp; Dietary Information
            </h2>
            <p>
              Our food may contain or come into contact with common allergens
              including nuts, gluten, dairy, eggs, and shellfish. If you have
              any food allergies or dietary requirements, please contact us
              before placing your order. While we take precautions, we cannot
              guarantee a completely allergen-free environment.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">
              7. Refunds &amp; Complaints
            </h2>
            <p>
              If you are unsatisfied with your order, please contact us within
              24 hours of delivery. We will assess complaints on a case-by-case
              basis and may offer a replacement, partial refund, or full refund
              at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">
              8. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos, and
              images, is the property of Oba Rere Bites and is protected by
              copyright laws. You may not reproduce, distribute, or use any
              content without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">
              9. Contact
            </h2>
            <p>
              For any questions about these terms, please contact us at{" "}
              <a
                href="mailto:hello@obarerebites.co.uk"
                className="text-jollof hover:underline"
              >
                hello@obarerebites.co.uk
              </a>
              .
            </p>
          </section>

          <p className="text-xs text-gray-400 pt-4 border-t border-gray-100">
            Last updated: May 2026
          </p>
        </div>
      </div>
    </div>
  );
}
