import React from "react";
import { ContactHeader } from "./components/ContactHeader";
import { Contact } from "./components/Contact";
import { PricingPackages } from "./components/PricingPackages";
import { PricingBreakdown } from "./components/PricingBreakdown";
import { FAQs } from "./components/FAQs";
import SEO from "@/components/SEO";

export default function Page() {
  return (
    <>
      <SEO
        title="Contact - AMB TECH"
        description="Get in touch with Almanāb Technologies. We work with founders and businesses worldwide."
        canonical="https://tech.almanab.com/contact"
      />
      {/* <ContactHeader /> */}
      <Contact />
      <PricingBreakdown />
      {/* <PricingPackages /> */}
      <FAQs />
    </>
  );
}
