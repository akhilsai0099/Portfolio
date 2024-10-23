import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function About({
  aboutRef,
}: {
  aboutRef: React.RefObject<HTMLElement>;
}) {
  return (
    <section ref={aboutRef} className="mb-16">
      <h2 className="text-4xl font-bold mb-4 text-[rgb(106,90,205)]">
        About Me
      </h2>
      <div className="flex items-center space-x-4 mb-4">
        <MapPin className="text-[rgb(106,90,205)]" />
        <span>Hyderabad, India</span>
      </div>
      <div className="flex space-x-4 mb-4">
        <Link
          href="https://linkedin.com/in/akhilsaiboppudi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="icon"
            className=" hover:scale-125 transition-all duration-300 "
          >
            <Linkedin className="h-4 w-4 text-blue-600" />
          </Button>
        </Link>
        <Link
          href="https://github.com/akhilsai0099"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="icon"
            className=" hover:scale-125 transition-all duration-300 "
          >
            <Github className="h-4 w-4 text-gray-800" />
          </Button>
        </Link>
        <Link href="mailto:akhilsaiboppudi@gmail.com">
          <Button
            variant="outline"
            size="icon"
            className="hover:scale-125 transition-all duration-300"
          >
            <Mail className="h-4 w-4 text-red-600" />
          </Button>
        </Link>
      </div>
      <p className="text-lg text-gray-300">
        Full Stack Engineer with a passion for creating efficient, scalable, and
        user-friendly web applications. Experienced in both front-end and
        back-end development, with a strong focus on modern technologies and
        best practices.
      </p>
    </section>
  );
}
