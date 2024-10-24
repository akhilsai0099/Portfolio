import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";
import Link from "next/link";
import { GradientText } from "../ui/gradient-text";
import GlowingCard from "./GlowingCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/akhilsai0099",
    icon: Github,
    username: "@akhilsai0099",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/akhilsai0099",
    icon: Twitter,
    username: "@akhilsai0099",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/akhilsaiboppudi",
    icon: Linkedin,
    username: "akhilsaiboppudi",
  },
  {
    name: "Email",
    href: "mailto:akhilsaiboppudi@gmail.com",
    icon: Mail,
    username: "akhilsaiboppudi@gmail.com",
  },
  {
    name: "Medium",
    href: "https://medium.com/@akhilsai0099",
    icon: MessageCircle,
    username: "@akhilsaiboppudi",
  },
];

export default function Contact({
  contactRef,
}: {
  contactRef: React.RefObject<HTMLElement>;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={contactRef} className="mb-16">
      <Card className="w-full max-w-2xl h-full mx-auto border-none bg-transparent backdrop-blur">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold bg-clip-text text-transparent text-gray-500">
            Let&apos;s <GradientText>Connect</GradientText>
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            I&apos;m always open to new opportunities and interesting
            conversations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-lg p-6">
            <p className="text-white leading-relaxed text-justify">
              Whether you&apos;re interested in collaboration, have a project in
              mind, or just want to say hello, I&apos;d love to hear from you.
              I&apos;m particularly passionate about web development, open
              source, and building meaningful digital experiences.
            </p>
          </div>

          <Separator className="bg-muted/50" />

          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  animate={isInView ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 0.2 * index,
                        duration: 0.2,
                      },
                    },
                  }}
                  transition={{
                    damping: 10,
                    stiffness: 100,
                  }}
                  className="w-[calc(50%-0.5rem)]"
                >
                  <GlowingCard className="rounded-lg flex w-full h-full items-center justify-start p-4 text-center bg-[rgba(30,30,30,0.5)] backdrop-blur-md border-gray-800 text-white">
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center justify-center w-full"
                    >
                      <div className="flex items-center justify-center">
                        <Icon className="h-5 w-5 flex-shrink-0 " />
                      </div>
                      <div className="flex flex-col w-full justify-start overflow-hidden">
                        <span className="font-medium">{link.name}</span>
                        <span className="text-sm truncate w-full">
                          {link.username}
                        </span>
                      </div>
                    </Link>
                  </GlowingCard>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
