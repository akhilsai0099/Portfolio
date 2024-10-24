import React, { useRef } from "react";
import GlowingCard from "./GlowingCard";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { experience } from "@/data";
import { GradientText } from "../ui/gradient-text";
import { motion, useInView } from "framer-motion";
import BulletList from "../ui/BulletList";

const Experience = ({
  experienceRef,
}: {
  experienceRef: React.RefObject<HTMLElement>;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={experienceRef} className="mb-16">
      <h2 className="text-4xl font-bold mb-4 ">
        <GradientText>Experience</GradientText>
      </h2>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Change animate to use isInView
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.1,
            },
          },
        }}
        className="space-y-6"
      >
        {experience.map((job, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
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
                <BulletList items={job.tasks} className="text-white" />
              </CardContent>
            </GlowingCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
