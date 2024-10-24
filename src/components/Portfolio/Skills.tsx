import React, { useRef } from "react";
import GlowingCard from "./GlowingCard";
import { skills } from "@/data";
import { motion, useInView, useAnimation } from "framer-motion";
import { GradientText } from "../ui/gradient-text";

const Skills = ({ skillsRef }: { skillsRef: React.RefObject<HTMLElement> }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={skillsRef} className="mb-16">
      <h2 className="text-4xl font-bold mb-4 text-[rgb(106,90,205)]">
        <GradientText>Skills</GradientText>
      </h2>
      {/* <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill) => (
          <GlowingCard
            key={skill}
            className="rounded-lg p-4 w-[calc(50%-0.5rem)] min-w-[180px] max-w-[300px] text-center bg-[rgba(30,30,30,0.5)] backdrop-blur-md border-gray-800 text-white"
          >
            <span className="relative z-10">{skill}</span>
          </GlowingCard>
        ))}
      </div> */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Change animate to use isInView
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.1,
              staggerChildren: 0.05,
            },
          },
        }}
        className="flex flex-wrap justify-center gap-4"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <GlowingCard
              glowCardStyle="rounded-full"
              className="bg-[rgba(30,30,30,0.5)] text-center backdrop-blur-md hover:scale-110 min-w-fit rounded-full px-4 py-2 text-sm font-medium text-gray-300 border border-gray-700 transition-all duration-100 hover:border-[rgb(106,90,205)] hover:text-[rgb(106,90,205)] hover:shadow-[0_0_10px_rgba(106,90,205,0.3)]"
            >
              {skill}
            </GlowingCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
