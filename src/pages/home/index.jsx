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

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
