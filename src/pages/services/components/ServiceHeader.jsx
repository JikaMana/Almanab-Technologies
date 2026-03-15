import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

export function ServiceHeader() {
  return (
    <section className="flex-center bg-brand-secondary px-[5%] py-24 md:py-32 lg:py-36">
      <div className="container text-center">
        <SectionHeader
          tagline="Craft"
          title="Digital solutions that work"
          description=" Transforming your digital vision into powerful, efficient software
          solutions across web and mobile platforms."
          whiteTexts={true}
          className="mb-8 max-w-[768px] text-white"
        />
        <Link to="/contact">
          <Button
            title="Consult"
            size="lg"
            className="bg-gold hover:bg-gold/90 h-auto w-max cursor-pointer rounded-full px-5 py-2.5 text-lg font-medium text-white transition-colors"
          >
            Consult
          </Button>
        </Link>
      </div>
    </section>
  );
}
