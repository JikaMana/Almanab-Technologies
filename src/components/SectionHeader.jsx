import React from "react";
import { Button } from "@/components/ui/button";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

/**
 * Reusable component for displaying centered section headings and an optional CTA block.
 * @param {string} tagline - The small text above the main title (e.g., "Excellence").
 * @param {string} title - The main heading (e.g., "Why choose Codefloxx").
 * @param {string} description - The descriptive paragraph below the title.
 * @param {boolean} [showCta=false] - If true, displays the two CTA buttons.
 */

export const SectionHeaderCta = ({ btn1, btn2, whiteTexts }) => (
  <div className="flex-center mt-6 gap-x-4 md:mt-8">
    <HashLink smooth to={`/about-us`}>
      <Button
        title={btn1 || "Contact"}
        size="lg"
        className={`hover:bg-brand-main/90 bg-brand-main h-auto w-max cursor-pointer rounded-full px-5 py-2.5 text-lg font-medium text-black shadow-none outline-2 hover:text-white ${whiteTexts ? "bg-brand-shade-dark text-white outline-none" : ""}`}
      >
        {btn1}
      </Button>
    </HashLink>
    <HashLink smooth to={`/project-cases`}>
      <Button
        title={btn2 || "Explore"}
        size="lg"
        variant="outline"
        className={`hover:bg-brand-main flex h-auto w-max cursor-pointer items-center gap-1.5 rounded-full bg-transparent px-5 py-2.5 text-lg font-medium shadow-none hover:text-white ${whiteTexts ? "hover:bg-brand-shade-dark hover:border-brand-shade-dark border-white text-white" : ""}`}
      >
        <span>{btn2}</span>
        {!whiteTexts && <RxChevronRight className="h-4 w-4" />}
      </Button>
    </HashLink>
  </div>
);
export function SectionHeader({
  tagline,
  title,
  description,
  whiteTexts = false,
  showCta = false,
  className,
  btn1 = "Learn More",
  btn2 = "Explore",
}) {
  return (
    <div className={`mx-auto text-center ${className}`}>
      <p className="mb-3 text-xl font-medium md:mb-4">{tagline}</p>

      <h1 className="mb-5 text-3xl font-semibold sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
        {title}
      </h1>

      <p className="text-xl tracking-wide">{description}</p>

      {showCta && (
        <SectionHeaderCta btn1={btn1} btn2={btn2} whiteTexts={whiteTexts} />
      )}
    </div>
  );
}
