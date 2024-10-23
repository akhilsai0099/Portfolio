import React from "react";
import GlowingCard from "./GlowingCard";
import { skills } from "@/data";
import { GradientText } from "../ui/gradient-text";

const Skills = ({ skillsRef }: { skillsRef: React.RefObject<HTMLElement> }) => {
  return (
    <section ref={skillsRef} className="mb-16">
      <h2 className="text-4xl font-bold mb-4 text-[rgb(106,90,205)]">
        <GradientText>Skills</GradientText>
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill) => (
          <GlowingCard
            key={skill}
            className="rounded-lg p-4 w-[calc(50%-0.5rem)] min-w-[180px] max-w-[300px] text-center bg-[rgba(30,30,30,0.5)] backdrop-blur-md border-gray-800 text-white"
          >
            <span className="relative z-10">{skill}</span>
          </GlowingCard>
        ))}
      </div>
    </section>
  );
};

export default Skills;
