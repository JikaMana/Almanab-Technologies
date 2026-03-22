import React from "react";
import { ServiceHeader } from "./components/ServiceHeader";
import { WebsiteLayout } from "./components/WebsiteLayout";
import { MobileLayout } from "./components/MobileLayout";
import { MoreServices } from "./components/MoreServices";
import { EcosystemSupport } from "./components/EcosystemSupport";
import { Testimonials } from "./components/Testimonials";
import { CallToAction } from "./components/CallToAction";
import Services from "./components/Services";

export default function Page() {
  return (
    <div>
      {/* <ServiceHeader /> */}
      <Services />
      <WebsiteLayout />
      <MobileLayout />
      <MoreServices />
      <EcosystemSupport />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
