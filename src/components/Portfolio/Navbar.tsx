// Your code for Navbar component will go here
import { Briefcase, Code, Cpu, FileUser, Send } from "lucide-react";
import Link from "next/link";

export default function Navbar({
  activeSection,
  scrollToSection,
  //   aboutRef,
  projectsRef,
  experienceRef,
  skillsRef,
  contactRef,
}: {
  activeSection: string;
  scrollToSection: (ref: React.RefObject<HTMLElement>, section: string) => void;
  //   aboutRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
  experienceRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}) {
  return (
    <header className="bg-[rgba(20,20,20,0.8)] backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-center items-center space-x-1 md:space-x-4">
          {[
            // { name: "About", icon: <MapPin size={18} />, ref: aboutRef },
            {
              name: "Experience",
              icon: <Briefcase size={18} />,
              ref: experienceRef,
            },
            { name: "Projects", icon: <Code size={18} />, ref: projectsRef },
            { name: "Skills", icon: <Cpu size={18} />, ref: skillsRef },
            { name: "Contact", icon: <Send size={18} />, ref: contactRef },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.ref, item.name.toLowerCase())}
              className={`flex items-center px-3 py-2 rounded-full transition-all duration-300 ${
                activeSection === item.name.toLowerCase()
                  ? "bg-[rgba(106,90,205,0.2)] text-[rgb(106,90,205)]"
                  : "hover:bg-[rgba(106,90,205,0.1)] text-gray-400 hover:text-gray-200"
              }`}
            >
              {item.icon}
              <span className="ml-2 hidden md:inline">{item.name}</span>
            </button>
          ))}
          <Link
            href="/resume.pdf"
            target="_blank"
            className={`flex items-center px-3 py-2 rounded-full transition-all duration-300 "hover:bg-[rgba(106,90,205,0.1)] text-gray-400 hover:text-gray-200"
            `}
          >
            <FileUser size={18} />
            <span className="ml-2 hidden md:inline">Resume</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
