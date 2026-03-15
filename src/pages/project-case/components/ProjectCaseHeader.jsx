import { Badge } from "@/components/ui/badge";
import React from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Link } from "react-router-dom";

export function ProjectCaseHeader() {
  return (
    <section className="flex-center bg-brand-main px-[5%] pt-24 md:pt-32 lg:pt-36">
      <div className="container">
        <div className="mx-auto mb-12 text-center md:mb-18 lg:mb-20">
          <SectionHeader
            tagline=""
            title=" Digital solutions unleashed"
            description="  Transforming complex challenges into elegant software experiences
            for businesses across Nigeria, Africa and Worldwide."
            whiteTexts={true}
            className="text-brand-secondary max-w-[658px]"
          />
          <div className="mt-5 flex flex-wrap justify-center gap-2 md:mt-6">
            <Badge className="bg-brand-shade-dark hover:bg-brand-secondary rounded-full px-3 py-1.5 transition-all duration-500">
              <Link to="#" className="text-brand-secondary text-base">
                Web development
              </Link>
            </Badge>
            <Badge className="bg-brand-shade-dark hover:bg-brand-secondary rounded-full px-3 py-1.5">
              <Link to="#" className="text-brand-secondary text-base">
                Mobile apps
              </Link>
            </Badge>
            <Badge className="bg-brand-shade-dark hover:bg-brand-secondary rounded-full px-3 py-1.5">
              <Link to="#" className="text-brand-secondary text-base">
                UI/UX design
              </Link>
            </Badge>
          </div>
        </div>
        <div className="overflow-hidden rounded-t-[64px]">
          <img
            loading="lazy"
            src="https://res.cloudinary.com/deid1vy94/image/upload/v1759421538/codefloxx-project-case-banner_d2gnro.webp"
            alt="Project Case Sample"
            className="rounded-image w-full"
          />
        </div>
      </div>
    </section>
  );
}
