import React from "react";
import { Card } from "@/components/ui/card";
import { BiSolidStar } from "react-icons/bi";
import { testimonials } from "@/constants/testimonials_data";

/**
 * Renders a single testimonial card.
 * @param {object} testimonial - The testimonial data object.
 */
function TestimonialCard({ testimonial }) {
  const stars = Array(testimonial.rating).fill(null);

  return (
    <Card className="flex w-full flex-col items-start justify-between border-3 border-gray-200 bg-transparent p-8 shadow-none md:p-8">
      <div className="mb-5 md:mb-6">
        <div className="mb-5 flex md:mb-6">
          {stars.map((_, i) => (
            <BiSolidStar key={i} className="text-gold mr-1 size-6" />
          ))}
        </div>

        <blockquote className="text-medium text-lg leading-relaxed text-white">
          {testimonial.quote}
        </blockquote>
      </div>

      <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
        <img
          loading="lazy"
          src={testimonial.avatar}
          alt={`Avatar of ${testimonial.author}`}
          className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
        />
        <div className="text-white">
          <p className="font-semibold">{testimonial.author}</p>
          <p className="text-sm">{testimonial.title}</p>
        </div>
      </div>
    </Card>
  );
}

export function TestimonialGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
}
