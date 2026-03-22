import React from "react";
import { Tabs } from "@/components/ui/tabs";
import { ReasonsTabContent, ReasonsTabHeader } from "./ReasonsTab";
import { SectionHeader } from "@/components/SectionHeader";

export function WhyChooseUs() {
  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <SectionHeader
            tagline="Why Almanāb Technologies"
            title={<>We Build Software That Works When It Matters</>}
            description="From web platforms to mobile apps - we partner with founders and businesses to ship products that are fast, reliable, and built to grow."
            showCta={true}
            className="max-w-232"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="tab-one" className="mx-auto max-w-4xl">
          <ReasonsTabHeader />
          <ReasonsTabContent />
        </Tabs>
      </div>
    </section>
  );
}
