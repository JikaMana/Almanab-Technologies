import React from "react";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Features } from "./components/Features";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Portfolio } from "./components/Portfolio";
import { ClientStories } from "./components/ClientStories";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import HeroSection from "./components/HeroSection";
import { OurVisionAndMission } from "./components/OurVisionAndMission";
import SEO from "@/components/SEO";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Almanāb Technologies",
  url: "https://tech.almanab.com",
  description: "Web and mobile software studio based in Nigeria.",
  serviceType: [
    "Web Development",
    "Mobile App Development",
    "SaaS Development",
    "UI/UX Development",
  ],
  areaServed: "Worldwide",
};

export default function Home() {
  return (
    <>
      <SEO
        title="AMB TECH - Web & Mobile Software Studio, Nigeria"
        description="We build scalable web apps, mobile apps, and SaaS platforms for founders worldwide. Based in Nigeria."
        canonical="https://tech.almanab.com/"
        schema={homeSchema}
      />
      <HeroSection />
      <WhyChooseUs />
      <Services />
      <Portfolio />

      <Features />
      <Process />
      <ClientStories />
      {/* <OurVisionAndMission /> */}
      <Faq />
      <Contact />
    </>
  );
}
