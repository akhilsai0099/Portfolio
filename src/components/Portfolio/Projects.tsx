import { projects } from "@/data";
import Link from "next/link";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { GradientText } from "../ui/gradient-text";
import GlowingCard from "./GlowingCard";
import { useInView, motion } from "framer-motion";

const Projects = ({
  projectsRef,
}: {
  projectsRef: React.RefObject<HTMLElement>;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={projectsRef} className="mb-16 relative">
      <h2 className="text-4xl font-bold mb-4 text-[rgb(106,90,205)]">
        <GradientText>Projects</GradientText>
      </h2>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              // delayChildren: 0.3,
              // staggerChildren: 0.1,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                },
              },
            }}
          >
            <GlowingCard className=" bg-[rgba(30,30,30,0.5)] backdrop-blur-md border-gray-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(106,90,205,0.3)] overflow-hidden">
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
                      className="bg-gradient-to-b text-sm from-zinc-900 to-zinc-800 text-gray-300 px-3 py-1 rounded-full"
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
