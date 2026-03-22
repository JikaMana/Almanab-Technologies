"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const tabHeaders = [
  { value: "tab-one", label: "Scalability" },
  { value: "tab-two", label: "Performance" },
  { value: "tab-three", label: "Innovation" },
];

const tabContentData = [
  {
    value: "tab-one",
    number: "01",
    title: "Architecture that grows with your business",
    description:
      "We design systems with headroom — not just for where you are today, but for 10× the load, new markets, and product pivots you haven't planned yet. Clean abstractions, modular services, and sensible defaults that prevent future rewrites.",
    cta: "Explore our approach",
    url: "#process",
    stats: [
      {
        value: "99.98%",
        label: "Average uptime across production systems we maintain",
      },
      {
        value: "40ms",
        label: "Median API response time on optimized deployments",
      },
      {
        value: "Zero",
        label: "Surprise rewrites. We design it right the first time.",
      },
    ],
  },
  {
    value: "tab-two",
    number: "02",
    title: "Speed is a feature, not an afterthought",
    description:
      "Slow software costs you users. We instrument and profile from day one — optimizing renders, reducing bundle sizes, indexing databases properly, and choosing the right infrastructure for your workload before it becomes a crisis.",
    cta: "See our process",
    url: "/project-cases#roadmap",
    stats: [
      {
        value: "< 1.2s",
        label: "Largest Contentful Paint target on all web deliverables",
      },
      {
        value: "3×",
        label: "Typical performance gain after our optimization audits",
      },
      {
        value: "100",
        label: "Lighthouse scores we consistently achieve for core pages",
      },
    ],
  },
  {
    value: "tab-three",
    number: "03",
    title: "Modern stack, pragmatic choices",
    description:
      "We keep up with what matters — AI integrations, edge runtimes, new frameworks — but we only adopt what genuinely solves your problem. No hype-driven rewrites. Just sound decisions that keep your codebase clean and your team moving fast.",
    cta: "View case studies",
    utl: "/project-cases",
    stats: [
      {
        value: "50+",
        label: "Projects shipped across SaaS, fintech, and e-commerce",
      },
      {
        value: "AI-ready",
        label: "Every product is designed to integrate AI tooling from day one",
      },
      {
        value: "2-week",
        label: "Sprint cycles with demos, feedback loops, and clear milestones",
      },
    ],
  },
];

export const ReasonsTabHeader = () => {
  return (
    <TabsList className="border-border mb-10 flex w-full items-end gap-0 rounded-none border-b bg-transparent p-0">
      {tabHeaders.map((header) => (
        <TabsTrigger
          key={header.value}
          value={header.value}
          className="text-muted-foreground data-[state=active]:border-foreground data-[state=active]:text-foreground mx-auto w-full cursor-pointer rounded-none border-b-2 border-transparent bg-transparent px-0 pr-6 pb-3 text-sm font-normal shadow-none transition-colors data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:shadow-none"
        >
          {header.label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export const ReasonsTabContent = () => {
  return (
    <>
      {tabContentData.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="data-[state=active]:animate-in data-[state=active]:fade-in-0 mt-0 w-full"
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            {/* Left - text content */}
            <div className="flex flex-col">
              <p className="text-border mb-5 text-6xl italic lg:text-7xl">
                {tab.number}
              </p>
              <h3 className="text-foreground mb-4 text-2xl leading-snug font-semibold lg:text-3xl">
                {tab.title}
              </h3>
              <p className="text-muted-foreground mb-8 text-[15px] leading-relaxed font-light">
                {tab.description}
              </p>
              <a href={tab.url}>
                <Button
                  variant="link"
                  className="text-foreground flex w-fit cursor-pointer items-center gap-0 px-0 text-base font-semibold underline-offset-4 hover:gap-1"
                >
                  {tab.cta}
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Button>
              </a>
            </div>

            {/* Right - stats */}
            <div className="divide-border flex flex-col justify-between divide-y">
              {tab.stats.map((stat, i) => (
                <div
                  key={i}
                  className="first:border-border py-5 first:border-t"
                >
                  <p className="text-foreground mb-1 text-3xl font-semibold">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-[13px] leading-relaxed font-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      ))}
    </>
  );
};
