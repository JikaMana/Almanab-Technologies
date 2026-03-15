import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const Circle = () => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["start center", "start start"],
  });

  const backgroundColor = {
    backgroundColor: useTransform(
      scrollYProgress,
      [0, 0.5],
      ["#e5e7eb", "var(--color-scheme-text)"], // light gray → brand color
    ),
  };

  return (
    <motion.div
      ref={circleRef}
      style={backgroundColor}
      className="z-20 mt-9 size-4 rounded-full border-4 border-white shadow-[0_0_0_6px_rgba(0,0,0,0.05)] md:mt-12"
    />
  );
};

const milestones = [
  {
    year: "2021",
    title: "Humble beginnings",
    desc: "Founded CodeFloxx with a focus on helping local businesses transition online.",
    primaryBtn: "Read",
    secondaryBtn: "Story",
  },
  {
    year: "2022",
    title: "First major client",
    desc: "Secured our first enterprise project, marking the start of steady growth.",
    primaryBtn: "View",
    secondaryBtn: "Case Study",
  },
  {
    year: "2023",
    title: "Expanding expertise",
    desc: "Added mobile app development and UI/UX design to our service offerings.",
    primaryBtn: "Discover",
    secondaryBtn: "Services",
  },
  {
    year: "2024",
    title: "Industry recognition",
    desc: "Recognized as a rising tech agency for our innovative approach and client results.",
    primaryBtn: "Learn",
    secondaryBtn: "More",
  },
];

export function OurTimeline() {
  return (
    <section className="flex-center bg-brand-secondary px-[5%] py-16 text-white md:py-24 lg:py-28">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <SectionHeader
              tagline="Our growth story"
              title="Milestones that shaped our journey"
              description="We may be young, but every step has strengthened our vision to create impactful digital solutions."
              className="max-w-[768px]"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative grid grid-cols-1 justify-items-center">
          {/* Vertical line */}
          <div className="absolute flex h-full w-8 flex-col items-center justify-self-start md:justify-self-center">
            <div className="from-scheme-background absolute z-10 h-20 w-[2px] bg-gradient-to-b to-transparent" />
            <div className="bg-scheme-text/40 sticky top-0 mt-[-50vh] h-[50vh] w-[2px]" />
            <div className="bg-scheme-text/20 h-full w-[2px]" />
            <div className="to-scheme-background absolute bottom-0 z-0 h-20 w-[2px] bg-gradient-to-t from-transparent" />
            <div className="bg-scheme-background absolute top-[-50vh] h-[50vh] w-full" />
          </div>

          {milestones.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-[max-content_1fr] items-start justify-items-center gap-x-4 md:grid-cols-[1fr_max-content_1fr] md:gap-x-8 lg:gap-x-12`}
            >
              {/* Left/right alternation */}
              {index % 2 === 0 ? (
                <>
                  <div className="hidden w-full md:block" />
                  <div className="relative flex h-[150%] justify-center border-x-2"></div>
                  <Card className="z-20 flex flex-col bg-transparent p-6 shadow-md transition hover:shadow-lg md:p-8">
                    <h3 className="mb-2 text-3xl font-extrabold text-white md:mb-3 md:text-4xl">
                      {item.year}
                    </h3>
                    <h4 className="mb-3 text-3xl font-semibold text-white md:mb-4 md:text-4xl">
                      {item.title}
                    </h4>
                    <p className="text-lg leading-relaxed text-white">
                      {item.desc}
                    </p>
                  </Card>
                </>
              ) : (
                <>
                  <Card className="z-20 flex flex-col bg-transparent p-6 shadow-md transition hover:shadow-lg md:p-8">
                    <h3 className="mb-2 text-3xl font-extrabold text-white md:mb-3 md:text-2xl">
                      {item.year}
                    </h3>
                    <h4 className="mb-3 text-3xl font-semibold text-white md:mb-4 md:text-4xl">
                      {item.title}
                    </h4>
                    <p className="text-lg leading-relaxed text-white">
                      {item.desc}
                    </p>
                  </Card>
                  <div className="order-first flex h-full justify-center border-x-2 md:order-none"></div>
                  <div className="hidden w-full md:block" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
