import React from "react";
import { ServiceHeader } from "./components/ServiceHeader";
import { WebsiteLayout } from "./components/WebsiteLayout";
import { MobileLayout } from "./components/MobileLayout";
import { MoreServices } from "./components/MoreServices";
import { EcosystemSupport } from "./components/EcosystemSupport";
import { Testimonials } from "./components/Testimonials";
import { CallToAction } from "./components/CallToAction";
import Services from "./components/Services";
import SEO from "@/components/SEO";

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Almanāb Technologies Services",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Web Application Development",
      provider: { "@type": "Organization", name: "Almanāb Technologies" },
    },
    {
      "@type": "Service",
      position: 2,
      name: "Mobile App Development",
      provider: { "@type": "Organization", name: "Almanāb Technologies" },
    },
    {
      "@type": "Service",
      position: 3,
      name: "SaaS Development",
      provider: { "@type": "Organization", name: "Almanāb Technologies" },
    },
  ],
};

export default function Page() {
  return (
    <>
      <SEO
        title="Services - Web, Mobile & SaaS Development | AMB TECH"
        description="We offer web application development, mobile apps, SaaS platforms, and UI/UX design. Built for scale."
        canonical="https://tech.almanab.com/services"
        schema={servicesSchema}
      />
      {/* <ServiceHeader /> */}
      <Services />
      <WebsiteLayout />
      <MobileLayout />
      <MoreServices />
      <EcosystemSupport />
      <Testimonials />
      <CallToAction />
    </>
  );
}
