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
            title={<>Built for teams who ship with confidence</>}
            description="We partner with founders and product teams to build software that is fast, resilient, and built to last - not just to demo."
            showCta={true}
            className="max-w-200"
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
