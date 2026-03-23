import React from "react";
import { AboutUsHeader } from "./components/AboutUsHeader";
import { AboutUsStorySection } from "./components/AboutUsStorySection";
import { AMBTechTeam } from "./components/AMBTechTeam";
import { OurTimeline } from "./components/OurTimeline";
import { Testimonials } from "./components/Testimonials";
import { AwardAndIndustryRecogition } from "./components/AwardAndIndustryRecogition";
import { CallToAction } from "./components/CallToAction";
import { TrustedBusinesses } from "./components/TrustedBusinesses";
import SEO from "@/components/SEO";

export default function AboutUs() {
  return (
    <>
      <SEO
        title="About Us - AMB TECH"
        description="Learn about Almanāb Technologies, a software studio from Nigeria building products for the world."
        canonical="https://tech.almanab.com/about-us"
      />
      <AboutUsHeader />
      <AboutUsStorySection />
      <AMBTechTeam />
      <OurTimeline />
      <Testimonials />
      <AwardAndIndustryRecogition />
      <TrustedBusinesses />
      <CallToAction />
    </>
  );
}
