import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function EcosystemSupport() {
  return (
    <section className="flex-center bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <img
              loading="lazy"
              src="/assets/codefloxx-ecosystem-icon.jpeg"
              alt="Ecosystem"
            />
            <SectionHeader
              tagline=""
              title="Continuous support for your digital ecosystem"
              description="Proactive maintenance and updates to ensure your digital products remain robust and cutting-edge."
              showCta={false}
              className="text-left"
            />
            {/* <div className="mt-6 flex gap-x-4 md:mt-8">
              <Button
                title="Support"
                size="lg"
                className="hover:bg-brand-main h-auto w-max cursor-pointer rounded-full bg-transparent px-5 py-2.5 text-lg font-medium text-black shadow-none outline-2 outline-gray-600 hover:text-white"
              >
                Support
              </Button>

              <Button
                title="Optimize"
                size="lg"
                variant="outline"
                className="hover:bg-brand-main flex h-auto w-max cursor-pointer items-center gap-1.5 rounded-full bg-transparent px-5 py-2.5 text-lg font-medium shadow-none hover:text-white"
              >
                <span>Optimize</span>
                <RxChevronRight className="h-4 w-4" />
              </Button>
            </div> */}
          </div>
          <div className="max-h-[588px] w-full overflow-hidden rounded-xl shadow-lg">
            <img
              loading="lazy"
              src="https://res.cloudinary.com/deid1vy94/image/upload/v1759412162/codefloxx-ecosystem-supports_rftgwz.avif"
              className="h-full w-full object-cover"
              alt="Descriptive image for ecosystem supports"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
