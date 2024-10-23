import React from "react";
import GlowingCard from "./GlowingCard";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { experience } from "@/data";
import { GradientText } from "../ui/gradient-text";

const Experience = ({
  experienceRef,
}: {
  experienceRef: React.RefObject<HTMLElement>;
}) => {
  return (
    <section ref={experienceRef} className="mb-16">
      <h2 className="text-4xl font-bold mb-4 ">
        <GradientText>Experience</GradientText>
      </h2>
      <div className="space-y-6">
        {experience.map((job, index) => (
          <GlowingCard key={index}>
            <CardHeader>
              <CardTitle className="text-gray-200 text-xl">
                {job.role}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {job.company} • {job.duration}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-300">
                {job.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </CardContent>
          </GlowingCard>
        ))}
      </div>
    </section>
  );
};

export default Experience;
