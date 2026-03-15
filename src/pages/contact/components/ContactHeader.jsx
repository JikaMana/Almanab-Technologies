import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import React from "react";

export function ContactHeader() {
  return (
    <section className="flex-center bg-brand-secondary px-[5%] py-24 md:py-32 lg:py-36">
      <div className="container text-center">
        <SectionHeader
          tagline="Contact"
          title="Get your project started"
          description="Speak with our expert developers and transform your digital vision into reality."
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
