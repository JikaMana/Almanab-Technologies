import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/constants/testimonials_data";
import React from "react";
import { BiSolidStar } from "react-icons/bi";

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
    <BiSolidStar
      key={index}
      className={`mr-1 size-6 ${
        index < rating ? "text-gold" : "text-gray-300"
      }`}
    />
  ));
};

export function Testimonials() {
  return (
    <section className="flex-center bg-brand-secondary px-[5%] py-16 text-white md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <SectionHeader
            tagline=""
            title="Client voices"
            description="Real stories from businesses we've helped transform digitally"
            showCta={false}
          />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="flex w-full flex-col items-start justify-between border-2 border-gray-400 bg-transparent p-6 shadow-md md:p-8"
            >
              <div className="mb-5 md:mb-6">
                <div className="mb-5 flex md:mb-6">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="text-medium text-white">
                  {`"${testimonial.quote}"`}
                </blockquote>
              </div>
              <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
                <img
                  loading="lazy"
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-white">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
