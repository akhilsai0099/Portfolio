import React from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import AnimatedText from "./AnimatedText";

const Hero = ({
  scrollToSection,
  aboutRef,
}: {
  scrollToSection: (ref: React.RefObject<HTMLElement>, section: string) => void;
  aboutRef: React.RefObject<HTMLElement>;
}) => {
  return (
    <section className="relative h-[calc(100svh-72px)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-black to-purple-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMTExIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          <AnimatedText text="AKHIL SAI BOPPUDI" />
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Full Stack Engineer | Problem Solver | Innovator
        </p>
        <Button
          onClick={() => scrollToSection(aboutRef, "about")}
          className="bg-[rgba(106,90,205,0.2)] hover:bg-[rgba(106,90,205,0.3)] backdrop-blur-md text-white border border-purple-500 px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(106,90,205,0.5)]"
        >
          Explore My Work
        </Button>
      </div>
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection(aboutRef, "about")}
      >
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
