import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function FAQs() {
  return (
    // Applied a light mint/teal background to the section
    <section className="flex-center bg-teal-50 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        {/* HEADER */}
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-4xl font-extrabold md:mb-6 md:text-5xl lg:text-6xl">
            FAQs
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about our software development services
          </p>
        </div>

        {/* ACCORDION (FAQs List) */}
        <Accordion
          type="multiple"
          className="grid w-full max-w-4xl grid-cols-1 gap-4"
        >
          {/* Loop over Accordion Items (using Card for elevation) */}
          {[
            {
              id: "0",
              question: "What services do you offer?",
              answer:
                "We provide full-stack web and mobile development, UI/UX design, and ongoing technical support. Our team specializes in creating scalable digital solutions for businesses of all sizes.",
            },
            {
              id: "1",
              question: "How long does a typical project take?",
              answer:
                "Project duration varies depending on complexity. A basic website might take 1-6 weeks, while complex web applications can range from 3-6 months.",
            },
            {
              id: "2",
              question: "Do you offer maintenance after project completion?",
              answer:
                "Yes. We provide ongoing maintenance and support packages to ensure your digital product remains secure, updated, and performs optimally.",
            },
            {
              id: "3",
              question: "Can you work with international clients?",
              answer:
                "Absolutely. We have experience working with clients globally and offer flexible communication channels to ensure smooth collaboration.",
            },
            {
              id: "4",
              question: "What is your pricing model?",
              answer:
                "We offer monthly and yearly packages with transparent pricing. Each tier includes different levels of service and support to match your specific needs.",
            },
          ].map((item) => (
            <Card
              key={item.id}
              className="w-full rounded-xl border border-gray-100 bg-white shadow-lg"
            >
              <AccordionItem
                value={`item-${item.id}`}
                className="w-full border-none"
              >
                <AccordionTrigger
                  className="w-full px-6 py-5 text-lg font-semibold text-gray-800 transition-colors hover:text-teal-600 [&[data-state=open]>svg]:rotate-180"
                  icon={
                    <RxPlus className="size-6 shrink-0 text-teal-600 transition-transform duration-300 md:size-7" />
                  }
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="w-full px-6 pb-6 text-base text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Card>
          ))}
        </Accordion>

        {/* CTA Section */}
        <div className="mt-16 rounded-xl border border-gray-100 bg-white p-8 shadow-xl md:mt-24 lg:mt-28">
          <h4 className="mb-3 text-3xl font-bold text-gray-800 md:mb-4">
            Need more information?
          </h4>
          <p className="text-lg text-gray-600">
            We are happy to discuss your specific requirements
          </p>
          <a href="#consult" className="mt-6">
            <Button
              title="Contact Us"
              className="bg-brand-main hover:bg-brand-main/90 mx-auto h-12 w-full cursor-pointer rounded-xl px-8 font-bold text-white"
            >
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
