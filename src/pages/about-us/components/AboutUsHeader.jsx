import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import React from "react";

export function AboutUsHeader() {
  return (
    <section className="flex-center bg-brand-secondary px-[5%] py-24 md:py-32 lg:py-36">
      <div className="container text-center">
        <SectionHeader
          tagline="Innovate"
          title="Digital solutions that work"
          description="We build robust software solutions that transform businesses across
          Nigeria and beyond with precision and expertise"
          showCta={true}
          whiteTexts={true}
          btn1="Consult"
          btn2="Quote"
          className="text-white"
        />
      </div>
    </section>
  );
}
