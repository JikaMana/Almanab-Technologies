import React from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { RxChevronRight } from "react-icons/rx";
import { serviceTabsData } from "@/constants/services_data";

const CubeIcon = () => (
  <div className="mb-4 flex size-8 items-center justify-center rounded-md border border-white/20 bg-white/10">
    <div className="bg-gold size-4 rotate-45 transform shadow-lg"></div>
  </div>
);

const ServiceCard = ({ service, isFeatured }) => {
  const headlineText = service.headline || "Digital Solution";
  const category = service.category || service.label || "Service";

  if (isFeatured) {
    return (
      <div className="bg-brand-secondary relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-2xl p-8 text-white shadow-2xl lg:col-span-2 lg:row-span-2">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1550063901-d857f12f11c7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        ></div>
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div>
            <p className="mb-2 text-sm tracking-widest text-gray-300 uppercase">
              Web
            </p>
            <h2 className="mb-4 text-4xl leading-tight font-extrabold lg:text-5xl">
              Web development strategies
            </h2>
            <p className="max-w-sm text-lg text-gray-300">
              Clean code meets elegant design. We build responsive websites that
              perform under pressure.
            </p>
          </div>
          {/* <div className="mt-8 flex gap-x-3">
            <Button
              size="lg"
              className="hover:bg-brand-shade-dark h-auto w-max cursor-pointer rounded-full bg-white px-5 py-2.5 text-lg font-medium text-gray-900 shadow-md transition-colors hover:text-white"
            >
              Learn
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex h-auto w-max cursor-pointer items-center gap-1.5 rounded-full border-2 border-white bg-transparent px-5 py-2.5 text-lg font-medium text-white shadow-none transition-colors hover:bg-white hover:text-gray-900"
            >
              <span>Details</span>
              <RxChevronRight className="h-4 w-4" />
            </Button>
          </div> */}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-secondary flex min-h-[200px] flex-col justify-between rounded-2xl p-6 text-white shadow-xl">
      <div>
        <CubeIcon />
        <h3 className="mb-2 text-xl leading-snug font-bold">{category}</h3>
        <p className="text-sm text-gray-300">{headlineText}</p>
      </div>
      <div className="mt-4">
        <Button
          size="sm"
          variant="ghost"
          className="hover:bg-brand-main text-gold flex h-auto w-max cursor-pointer items-center gap-1.5 rounded-full px-0 py-1 text-base font-medium hover:text-white"
        >
          <span>{service.primaryCta?.text.split(" ")[0] || "Explore"}</span>
          <RxChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export function Services() {
  const data = serviceTabsData || [];

  return (
    <section className="flex-center bg-brand-secondary px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <SectionHeader
              tagline="Services"
              title="Our digital engineering expertise"
              description="Comprehensive software solutions built with precision and purpose"
              showCta={false}
              className="text-brand-main"
            />
          </div>

          <div className="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {data[0] && <ServiceCard service={data[0]} isFeatured={true} />}

            {data.slice(1, 5).map((service, index) => (
              <ServiceCard key={index} service={service} isFeatured={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
