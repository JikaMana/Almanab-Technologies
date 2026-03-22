import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import {
  BiLinkAlt,
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function BlogPostHeader() {
  return (
    <section className="flex-center px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-8 flex w-full max-w-[768px] flex-col items-start justify-start text-white md:mb-16 lg:mb-20">
          <Breadcrumb className="mb-6 flex w-full items-center">
            <BreadcrumbList className="text-base text-black">
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Portfolio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Case study</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="mb-8 text-2xl font-semibold sm:text-3xl md:mb-10 md:text-5xl lg:mb-12 lg:text-5xl">
            Transforming digital landscapes through innovative software
            solutions
          </h1>
          <div className="flex w-full flex-col items-start justify-between sm:flex-row sm:items-end">
            <div className="mb-4 flex items-center sm:mb-0">
              <div className="mr-4 shrink-0">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/deid1vy94/image/upload/v1759421539/codefloxx-project-case-study-case_dvdp1a.webp"
                  alt="Almanāb TechnologiesProject Study case"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="font-semibold">John Adebayo</h6>
                <div className="mt-1 flex">
                  <p className="text-small">15 Mar 2023</p>
                  <span className="mx-2">•</span>
                  <p className="text-small">7 min read</p>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-flow-col grid-cols-[max-content] items-start gap-2">
              <a
                href="#"
                className="bg-scheme-foreground rounded-[1.25rem] p-1"
              >
                <BiLinkAlt className="size-6" />
              </a>
              <a
                href="#"
                className="bg-scheme-foreground rounded-[1.25rem] p-1"
              >
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a
                href="#"
                className="bg-scheme-foreground rounded-[1.25rem] p-1"
              >
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a
                href="#"
                className="bg-scheme-foreground rounded-[1.25rem] p-1"
              >
                <BiLogoFacebookCircle className="size-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[768px] overflow-hidden rounded-2xl">
          <img
            loading="lazy"
            src="https://res.cloudinary.com/deid1vy94/image/upload/v1759421539/codefloxx-project-case-study-case_dvdp1a.webp"
            className="rounded-image aspect-[2] size-full object-cover"
            alt="Placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
