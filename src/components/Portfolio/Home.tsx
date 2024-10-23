"use client";

import { useRef, useState } from "react";

import Contact from "@/components/Portfolio/Contact";
import Experience from "@/components/Portfolio/Experience";
import Footer from "@/components/Portfolio/Footer";
import { HeroSection } from "@/components/Portfolio/HeroSection";
import Navbar from "@/components/Portfolio/Navbar";
import Projects from "@/components/Portfolio/Projects";
import Skills from "@/components/Portfolio/Skills";
import { nunito } from "@/app/fonts/Fonts";
import Head from "next/head";

export const metadata = {
  title: "My new title",
  description: "My description",
};

export default function Home() {
  // const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (
    ref: React.RefObject<HTMLElement>,
    section: string
  ) => {
    if (ref.current) {
      const offset = 100;
      const top =
        ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: "smooth" });
    }
    setActiveSection(section);
  };

  return (
    <>
      <Head>
        <title>Akhil Sai Boppudi</title>
      </Head>
      <div
        className={`min-h-screen ${nunito.className} bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200`}
      >
        <Navbar
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          // aboutRef={aboutRef}
          projectsRef={projectsRef}
          experienceRef={experienceRef}
          skillsRef={skillsRef}
          contactRef={contactRef}
        />
        {/* <Hero scrollToSection={scrollToSection} aboutRef={aboutRef} /> */}
        <HeroSection
          scrollToSection={scrollToSection}
          aboutRef={experienceRef}
        />
        <main className="container mx-auto px-4 py-16">
          {/* <About aboutRef={aboutRef} /> */}
          <Experience experienceRef={experienceRef} />
          <Projects projectsRef={projectsRef} />
          <Skills skillsRef={skillsRef} />
          <Contact contactRef={contactRef} />
        </main>
        <Footer />
      </div>
    </>
  );
}
