import { projects } from "@/data";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { GradientText } from "../ui/gradient-text";
import GlowingCard from "./GlowingCard";

const Projects = ({
  projectsRef,
}: {
  projectsRef: React.RefObject<HTMLElement>;
}) => {
  return (
    <section ref={projectsRef} className="mb-16 relative">
      <h2 className="text-4xl font-bold mb-4 text-[rgb(106,90,205)]">
        <GradientText>Projects</GradientText>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <GlowingCard
            key={idx}
            className=" bg-[rgba(30,30,30,0.5)] backdrop-blur-md border-gray-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(106,90,205,0.3)] overflow-hidden"
          >
            <CardHeader>
              <CardTitle className="text-gray-200 text-xl">
                {project.title}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="z-50">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-b from-zinc-900 to-zinc-800 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <Link href={project.link}>
                  <Button className="mt-4 cursor-pointer text-[rgb(106,90,205)]">
                    View Project
                  </Button>
                </Link>
                {project.livelink && (
                  <Link href={project.livelink}>
                    <Button className="mt-4 cursor-pointer text-[rgb(106,90,205)]">
                      Demo
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </GlowingCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
