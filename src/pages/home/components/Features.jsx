import { SectionHeader, SectionHeaderCta } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import React from "react";

export function Features() {
  const featureBlocksData = [
    {
      title: "Scalable Architecture",
      description:
        "Systems designed to grow and adapt with your business needs.",
      imageSrc:
        "https://res.cloudinary.com/deid1vy94/image/upload/v1759105727/premium_photo-1677402408071-232d1c3c3787_ad6nsf.avif",
      imageAlt: "Scalable architecture illustration",
    },
    {
      title: "User-friendly Interfaces",
      description:
        "Intuitive design that enhances user experience and engagement.",
      imageSrc:
        "https://res.cloudinary.com/deid1vy94/image/upload/v1759105728/codefloxx-scalable_bynbqv.avif",
      imageAlt: "User interface illustration",
    },
    {
      title: "Visual Storytelling",
      description:
        "Design that communicates your brand's unique identity and vision.",
      imageSrc:
        "https://res.cloudinary.com/deid1vy94/image/upload/v1759105728/virtually-storytelling_z5ee47.webp",
      imageAlt: "Visual storytelling illustration",
    },
  ];

  return (
    <section className="flex-center bg-gold px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <SectionHeader
              tagline="Features"
              title="Our approach to digital solutions"
              description="We focus on creating software that is powerful, user-friendly, and visually compelling."
              showCta={false}
            />
          </div>
          <div className="mb-8 grid grid-cols-1 justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {featureBlocksData.map((feature, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-center text-center"
              >
                <div className="mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl md:mb-8">
                  <img
                    loading="lazy"
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="rounded-image h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-5 text-4xl font-bold md:mb-6">
                  {feature.title}
                </h3>
                <p className="text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
          {/* <SectionHeaderCta btn1="Learn More" btn2="Explore" /> */}
        </div>
      </div>
    </section>
  );
}
