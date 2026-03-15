import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

export function AboutUsHeader() {
  return (
    <section className="flex-center bg-brand-secondary px-[5%] py-24 md:py-32 lg:py-36">
      <div className="container text-center">
        <SectionHeader
          tagline="Innovate"
          title="Digital solutions that work"
          description="We build robust software solutions that transform businesses across
          Nigeria and beyond with precision and expertise"
          whiteTexts={true}
          className="mb-8 text-white"
        />
        <Link to="/contact">
          <Button
            title="Consult"
            size="lg"
            className="bg-gold hover:bg-gold/90 h-auto w-max cursor-pointer rounded-full px-5 py-2.5 text-lg font-medium text-white transition-colors"
          >
            Consult
          </Button>
        </Link>
      </div>
    </section>
  );
}
