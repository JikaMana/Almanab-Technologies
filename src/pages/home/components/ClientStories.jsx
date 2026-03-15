import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { TestimonialGrid } from "./TestimonialGrid";

export function ClientStories() {
  return (
    <section className="flex-center bg-brand-secondary px-[5%] py-16 text-white md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <SectionHeader
            tagline=""
            title="Client Stories"
            description="What some of our clients say about working with us."
            showCta={false}
            className="max-w-[768px]"
          />
        </div>
        <TestimonialGrid />
      </div>
    </section>
  );
}
