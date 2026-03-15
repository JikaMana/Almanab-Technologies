import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function AboutUsStorySection() {
  return (
    <section className="flex-center bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full">
              <SectionHeader
                tagline="Story"
                title="Our journey in software development"
                description=" Code Floxx emerged from a passion to solve complex digital
                challenges. We started small but grew through dedication and
                technical excellence."
                className="max-w-[768px]"
              />
            </div>
          </div>
          <div>
            <img
              loading="lazy"
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="rounded-image size-full object-cover"
              alt="Placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
