import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import React from "react";

export function ServiceHeader() {
  return (
    <section className="flex-center bg-brand-secondary px-[5%] py-24 md:py-32 lg:py-36">
      <div className="container text-center">
        <SectionHeader
          tagline="Craft"
          title="Digital solutions that work"
          description=" Transforming your digital vision into powerful, efficient software
          solutions across web and mobile platforms."
          btn1="Consult"
          btn2="Quote"
          showCta={true}
          whiteTexts={true}
          className="max-w-[768px] text-white"
        />
      </div>
    </section>
  );
}
