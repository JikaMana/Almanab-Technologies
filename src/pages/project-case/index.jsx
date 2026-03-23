import React from "react";
import { ProjectCaseHeader } from "./components/ProjectCaseHeader";
import { Projects } from "./components/Projects";
import { BlogPostHeader } from "./components/BlogPostHeader";
import { BlogPostContent } from "./components/BlogPostContent";
import { Testimonials } from "./components/Testimonial";
import { CallToAction } from "./components/CallToAction";
import SEO from "@/components/SEO";

export default function ProjectCases() {
  return (
    <>
      <SEO
        title="Project Cases - AMB TECH"
        description="Explore projects built by Almanāb Technologies — web platforms, mobile apps, and SaaS solutions."
        canonical="https://tech.almanab.com/project-cases"
      />
      <ProjectCaseHeader />
      <Projects />
      <BlogPostHeader />
      <BlogPostContent />
      <Testimonials />
      <CallToAction />
    </>
  );
}
