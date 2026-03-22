import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import clsx from "clsx";
import React, { Fragment, useEffect, useState } from "react";

const useHash = (initialLinks) => {
  const [currentHash, setCurrentHash] = useState(
    window.location.hash || initialLinks[0]?.href,
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const isActiveLink = (href) => {
    if (!href) return false;

    const hrefWithoutHash = href.replace(/^#/, "");
    const currentHashWithoutHash = currentHash.replace(/^#/, "");

    return hrefWithoutHash === currentHashWithoutHash;
  };

  const getLinkClassNames = (href) => {
    return clsx("block px-4 py-3 text-medium", {
      "border border-scheme-border bg-scheme-foreground font-semibold":
        isActiveLink(href),
    });
  };

  const getLinkStyle = (index) => {
    return {
      marginLeft: index === 0 ? 0 : `${Math.min(index * 16, 80)}px`,
    };
  };

  return {
    currentHash,
    isActiveLink,
    getLinkClassNames,
    getLinkStyle,
  };
};

export function BlogPostContent() {
  const hashState = useHash([
    { title: "Project Goals", href: "#heading-2" },
    { title: "Technical Approach", href: "#heading-3" },
    { title: "Design Process", href: "#heading-4" },
    { title: "Implementation", href: "#heading-5" },
    { title: "Results", href: "#heading-6" },
  ]);

  const projectContent = [
    {
      id: "project-goals",
      tag: "h2", // Use h2 for main sections
      title: "Project Goals",
      content: [
        {
          type: "paragraph",
          isBold: true,
          text: "We set out to achieve a seamless, scalable, and secure platform that modernizes the existing workflow. Our primary focus was on enhancing user experience and establishing a foundation for future feature expansion.",
        },
        {
          type: "paragraph",
          isBold: false,
          text: "This involved deep dives into stakeholder requirements and extensive user research to ensure the final product not only met technical specifications but genuinely solved key user pain points.",
        },
      ],
    },
    {
      id: "technical-approach",
      tag: "h3", // Use h3 for sub-sections
      title: "Technical Approach",
      content: [
        {
          type: "paragraph",
          isBold: false,
          text: "We leveraged a modern, microservices architecture based on [Specific Technology like Node.js/Python/Go] with a [Specific Framework like React/Vue/Angular] frontend. The entire stack is deployed via [Specific Cloud Platform like AWS/Azure/GCP] using CI/CD pipelines for rapid, reliable releases.",
        },
        {
          type: "paragraph",
          isBold: false,
          text: "To ensure high availability and performance, we implemented [Database Technology] for data persistence and utilized containerization (Docker/Kubernetes) to manage scalable, fault-tolerant infrastructure.",
        },
      ],
    },
    {
      id: "design-process",
      tag: "h4",
      title: "Design Process",
      content: [
        {
          type: "paragraph",
          isBold: false,
          text: "Our process began with Discovery & Analysis, moving into Wireframing & Prototyping for iterative testing. We adopted an agile, user-centric design approach, translating insights from usability tests directly into actionable design changes.",
        },
        {
          type: "figure",
          imageSrc:
            "https://res.cloudinary.com/deid1vy94/image/upload/v1759422431/codefloxx-ecommerce-dashboard-sample_lgfrlf.webp",
          imageAlt:
            "A screenshot of the application's core user dashboard wireframe.",
          caption: "Sample Admin Dashbaord of an Eccomerce platform.",
        },
      ],
    },
    {
      id: "implementation",
      tag: "h5",
      title: "Implementation",
      content: [
        {
          type: "paragraph",
          isBold: false,
          text: "The implementation phase followed a two-week sprint cycle, focusing on modular component development and rigorous unit and integration testing. We maintained high code quality through peer review and strict adherence to coding standards.",
        },
        {
          type: "blockquote",
          text: "The team's dedication to clean code and iterative delivery was paramount. This allowed us to consistently meet sprint goals and rapidly respond to emergent feedback without sacrificing stability.",
          source: "-Lead Software Engineer, Almanāb TechnologiesTechnologies",
        },
      ],
    },
    {
      id: "results",
      tag: "h6",
      title: "Results",
      content: [
        {
          type: "paragraph",
          isBold: false,
          text: "The final product successfully launched, resulting in a 45% reduction in task completion time for core users and a 99.9% uptime in the first quarter. User satisfaction scores rose significantly, validating our user-centric design and stable engineering.",
        },
      ],
    },
  ];

  return (
    <section
      id="roadmap"
      className="flex-center bg-brand-shade-light px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="xxl:gap-x-48 grid w-full grid-cols-1 gap-y-8 lg:grid-cols-[20rem_1fr] lg:gap-x-16">
          <div>
            <div className="lg:sticky lg:top-24">
              <Accordion
                type="single"
                defaultValue="aside-menu"
                className="lg:block"
                collapsible={true}
              >
                <AccordionItem value="aside-menu" className="border-none">
                  <AccordionTrigger className="border-scheme-border flex cursor-pointer items-center justify-between gap-3 border px-4 py-3 lg:pointer-events-none lg:cursor-auto lg:border-none lg:p-0 [&_svg]:size-4 [&_svg]:lg:hidden">
                    <h3 className="text-2xl leading-[1.4] font-bold sm:text-3xl md:text-4xl">
                      Project roadmap
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="pb-0">
                    <div className="mt-3 md:mt-4">
                      <a
                        href="#heading-2"
                        className={`${hashState.getLinkClassNames("#heading-2")} text-lg`}
                        style={hashState.getLinkStyle(0)}
                      >
                        Project Goals
                      </a>
                      <a
                        href="#heading-3"
                        className={`${hashState.getLinkClassNames("#heading-3")} text-lg`}
                        style={hashState.getLinkStyle(1)}
                      >
                        Technical Approach
                      </a>
                      <a
                        href="#heading-4"
                        className={`${hashState.getLinkClassNames("#heading-4")} text-lg`}
                        style={hashState.getLinkStyle(2)}
                      >
                        Design Process
                      </a>
                      <a
                        href="#heading-5"
                        className={`${hashState.getLinkClassNames("#heading-5")} text-lg`}
                        style={hashState.getLinkStyle(3)}
                      >
                        Implementation
                      </a>
                      <a
                        href="#heading-6"
                        className={`${hashState.getLinkClassNames("#heading-6")} text-lg`}
                        style={hashState.getLinkStyle(4)}
                      >
                        Results
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="prose-figcaption:border-l-border prose-strong:font-bold ...">
            {projectContent.map((section) => (
              <React.Fragment key={section.id}>
                {/* Dynamically render the heading tag */}
                {React.createElement(
                  section.tag,
                  {
                    id: section.id,
                    className:
                      "pt-6 pb-4 text-3xl font-semibold sm:text-4xl md:pt-8 lg:pt-12",
                  }, // Apply the classnames to the heading
                  section.title,
                )}

                {/* Map through the content array for each section */}
                {section.content.map((item, index) => {
                  if (item.type === "paragraph") {
                    return (
                      <p key={index}>
                        {item.isBold ? <strong>{item.text}</strong> : item.text}
                      </p>
                    );
                  } else if (item.type === "figure") {
                    return (
                      <figure key={index}>
                        <img
                          loading="lazy"
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          className="mt-8 mb-2 w-full rounded-2xl"
                        />
                        <figcaption className="mt-2 border-l-2">
                          <span> </span> {item.caption}
                        </figcaption>
                      </figure>
                    );
                  } else if (item.type === "blockquote") {
                    return (
                      <blockquote key={index}>
                        "{item.text}"
                        {item.source && (
                          <p className="mt-2 text-sm opacity-80">
                            {item.source}
                          </p>
                        )}
                      </blockquote>
                    );
                  }
                  return null;
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
