import { pricing } from "@/constants/pricesBreakdown_data";

export function PricingBreakdown() {
  return (
    <section id="Quote" className="bg-brand-shade-light px-[5%] py-16 md:py-24">
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-brand-main mb-3 font-semibold tracking-widest uppercase">
            Pricing
          </p>
          <h2 className="mb-4 text-4xl font-extrabold">
            Transparent Pricing, Flexible Solutions
          </h2>
          <p className="text-lg text-gray-600">
            We provide one-time project-based pricing tailored to your needs.
            Below are typical ranges to help you budget effectively. Prices are
            available in both Naira (₦) and USD ($).
          </p>
        </div>

        {/* PRICING TABLE */}
        <div className="grid gap-6 md:grid-cols-2">
          {pricing.map((item, i) => (
            <div
              key={i}
              className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition hover:shadow-xl"
            >
              <h3 className="mb-2 text-2xl font-bold text-gray-800">
                {item.category}
              </h3>
              <p className="mb-4 text-gray-600">{item.description}</p>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-brand-shade-dark">{item.naira}</span>
                <span className="text-brand-main">{item.usd}</span>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTNOTE */}
        <p className="text-brand-main mt-8 text-center">
          *Final pricing depends on your specific requirements. Contact us for a
          detailed quote (All prices are negotiable).
        </p>
      </div>
    </section>
  );
}
