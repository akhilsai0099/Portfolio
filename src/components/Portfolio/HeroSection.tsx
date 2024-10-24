"use client";

import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Code2,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/akhilsai0099" },
  { icon: Twitter, href: "https://twitter.com/akhilsai0099" },
  { icon: Linkedin, href: "https://linkedin.com/in/akhilsaiboppudi" },
  { icon: Mail, href: "mailto:akhilsaiboppudi@gmail.com" },
];

export function HeroSection({
  scrollToSection,
  aboutRef,
}: {
  scrollToSection: (ref: React.RefObject<HTMLElement>, section: string) => void;
  aboutRef: React.RefObject<HTMLElement>;
}) {
  return (
    <div className="relative min-h-[calc(100svh-72px)] flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* <JellyBlob /> */}

      {/* <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      /> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center space-y-6 max-w-3xl z-10"
      >
        <div className="flex justify-center mb-6">
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
            <Code2 className="w-8 h-8" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I&apos;m <GradientText>Akhil Sai Boppudi</GradientText>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground">
          Full-stack developer crafting beautiful and functional web experiences
        </p>

        <div className="flex gap-4 justify-center pt-4">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-colors"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 z-10 transform -translate-x-1/2 animate-bounce"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection(aboutRef, "about")}
          className="rounded-full bg-white/10 backdrop-blur-lg border  border-white/20 hover:bg-white/20"
        >
          <ArrowDown className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
}
