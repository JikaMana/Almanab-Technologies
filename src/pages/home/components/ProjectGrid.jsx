import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RxChevronRight } from "react-icons/rx";

import { projects } from "@/constants/projects_data";

/**
 * Renders a single project card.
 * @param {object} project
 */
export function ProjectCard({ project }) {
  return (
    <Card>
      <div className="aspect-video">
        <a href={project.link}>
          <img
            loading="lazy"
            src={project.image}
            className="h-full w-full rounded-t-xl object-cover"
            alt={`Image for ${project.title}`}
            // Fallback for placeholder image path
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/400x250/E0E0E0/333?text=${project.title}`;
            }}
          />
        </a>
      </div>
      <div className="px-5 py-6 sm:px-6">
        <h3 className="mb-2 font-bold">
          <a
            href={project.link}
            className="hover:text-primary text-sm transition duration-150 sm:text-base"
          >
            {project.title}
          </a>
        </h3>
        <p className="text-muted-foreground text-xs sm:text-base">
          {project.description}
        </p>

        <div className="mt-3 mb-6 flex flex-wrap gap-x-2 gap-y-3 md:mt-4">
          {project.tags.map((tag, index) => (
            <Badge
              key={index}
              className="rounded-full bg-transparent px-2 py-0.5 text-xs font-medium text-gray-700 shadow-none outline-2 outline-gray-600 hover:bg-gray-200 sm:px-3 sm:py-1 sm:text-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <Button
          title="View project"
          variant="link"
          size="link"
          iconright={<RxChevronRight />}
          className="text-primary mt-5 md:mt-6"
          asChild // Allows the button to wrap the anchor tag
        >
          <a href={project.link} target="_blank" className="flex items-center">
            <span>View project</span>
            <RxChevronRight className="size-10" strokeWidth={1} />
          </a>
        </Button>
      </div>
    </Card>
  );
}

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-12 sm:gap-x-4 md:gap-x-6 md:gap-y-16 lg:grid-cols-3 lg:gap-x-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
