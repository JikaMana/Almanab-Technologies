import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";

export function CallToAction() {
  return (
    <section className="flex-center bg-gray-50 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="max-w-[768px]">
        <div className="mx-auto w-full text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            <motion.span
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{ type: "spring", bounce: 0 }}
              className="block"
            >
              Ready to transform
            </motion.span>
          </h1>

          <h1 className="mb-5 text-3xl font-extrabold text-gray-900 sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
            <motion.span
              initial={{ x: "50%" }}
              animate={{ x: "0%" }}
              transition={{ type: "spring", bounce: 0 }}
              className="block"
            >
              your digital strategy
            </motion.span>
          </h1>

          <p className="text-xl tracking-wide text-gray-600">
            Let's discuss how our tailored software solutions can drive your
            business forward and unlock new potential.
          </p>

          <div className="flex-center mt-6 gap-x-4 md:mt-8">
            <Button
              title="Consult"
              size="lg"
              className="bg-gold hover:bg-gold/90 h-auto w-max cursor-pointer rounded-full px-5 py-2.5 text-lg font-medium text-white transition-colors"
            >
              Consult
            </Button>

            <Button
              title="Quote"
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold/90 h-auto w-max cursor-pointer rounded-full border-2 bg-transparent px-5 py-2.5 text-lg font-medium shadow-none transition-colors hover:text-white"
            >
              Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
