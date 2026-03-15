import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import React from "react";

export function Contact() {
  return (
    <section className="flex-center bg-brand-main text-dark px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto text-center">
          <h2>
            <motion.span
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{ type: "spring", bounce: 0 }}
              className="block text-4xl font-bold sm:mb-4 sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl"
            >
              Stay ahead
            </motion.span>
          </h2>
          <h2>
            <motion.span
              initial={{ x: "50%" }}
              animate={{ x: "0%" }}
              transition={{ type: "spring", bounce: 0 }}
              className="mb-5 block text-4xl font-bold sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl"
            >
              with our newsletter
            </motion.span>
          </h2>
          <p className="text-medium text-xl text-white">
            Get the latest insights, trends, and tips in software development
            directly in your inbox.
          </p>

          <div className="mx-auto mt-6 w-full md:mt-8">
            <form className="mx-auto mb-4 grid w-full max-w-xl grid-cols-1 items-center gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input
                id="email"
                type="email"
                placeholder="Enter email address"
                className="h-full w-full border-4 text-lg placeholder:text-black"
              />
              <Button
                title="Subscribe"
                size="xl"
                className="bg-brand-secondary w-full cursor-pointer rounded-full border-2 border-transparent px-5 py-2.5 text-lg font-medium shadow-none hover:border-white sm:w-max"
              >
                Subscribe
              </Button>
            </form>
            <p className="mx-auto max-w-[500px] text-sm">
              By signing up, you agree to our privacy policy and terms of
              service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
