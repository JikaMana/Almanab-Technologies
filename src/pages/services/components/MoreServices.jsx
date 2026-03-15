import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function MoreServices() {
  return (
    <section className="flex-center bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col gap-8 md:gap-0">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center">
          <div className="md:mr-24">
            <SectionHeader
              tagline="Develop"
              title="Intelligent web applications for complex challenges"
              description="Enterprise-grade web solutions designed to streamline your business operations and drive growth."
              showCta={false}
              className="text-left"
            />
            <ul className="mt-8 list-inside list-disc space-y-4 text-xl tracking-wide">
              <li>Scalable architecture</li>
              <li>Advanced security protocols</li>
              <li>Performance optimization</li>
            </ul>
            {/* <div className="mt-6 flex gap-x-4 md:mt-8">
              <Button
                title="Explore"
                size="lg"
                className="hover:bg-brand-main h-auto w-max cursor-pointer rounded-full bg-transparent px-5 py-2.5 text-lg font-medium text-black shadow-none outline-2 outline-gray-600 hover:text-white"
              >
                Explore
              </Button>

              <Button
                title="Details"
                size="lg"
                variant="outline"
                className="hover:bg-brand-main flex h-auto w-max cursor-pointer items-center gap-1.5 rounded-full bg-transparent px-5 py-2.5 text-lg font-medium shadow-none hover:text-white"
              >
                <span>Details</span>
                <RxChevronRight className="h-4 w-4" />
              </Button>
            </div> */}
          </div>
          <div className="max-h-[732px] w-full overflow-hidden">
            <img
              loading="lazy"
              src="https://res.cloudinary.com/deid1vy94/image/upload/v1759412162/codefloxx-intelligent-web-applications_j99bgx.avif"
              className="h-full w-full object-cover"
              alt="Placeholder image"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center">
          <div className="max-h-[732px] w-full overflow-hidden">
            <img
              loading="lazy"
              src="https://res.cloudinary.com/deid1vy94/image/upload/v1759412162/codefloxx-user-centric-interfaces_ee4ldp.avif"
              className="h-full w-full object-cover"
              alt="Placeholder image"
            />
          </div>
          <div className="md:ml-24">
            <SectionHeader
              tagline="Design"
              title="User-centric interfaces that captivate and convert"
              description="Crafting digital experiences that are intuitive, engaging, and aligned with your brand identity."
              showCta={false}
              className="text-left"
            />
            <ul className="mt-8 list-inside list-disc space-y-4 text-xl tracking-wide">
              <li>User research</li>
              <li>Wireframing and prototyping</li>
              <li>Interaction design</li>
            </ul>
            {/* <div className="mt-6 flex gap-x-4 md:mt-8">
              <Button
                title="Review"
                size="lg"
                className="hover:bg-brand-main h-auto w-max cursor-pointer rounded-full bg-transparent px-5 py-2.5 text-lg font-medium text-black shadow-none outline-2 outline-gray-600 hover:text-white"
              >
                Review
              </Button>

              <Button
                title="Explore"
                size="lg"
                variant="outline"
                className="hover:bg-brand-main flex h-auto w-max cursor-pointer items-center gap-1.5 rounded-full bg-transparent px-5 py-2.5 text-lg font-medium shadow-none hover:text-white"
              >
                <span>Explore</span>
                <RxChevronRight className="h-4 w-4" />
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
