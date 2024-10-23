import { Experiencetype } from "./types";

export const projects = [
  {
    title: "LLM Scraper",
    description: "Scrape data from websites and display visually using LLMs",
    technologies: ["Streamlit", "LangChain", "Python"],
    longDescription: "",
    images: [],
    link: "https://github.com/akhilsai0099/LLM-Scraper",
    livelink: "https://llm-scraper.streamlit.app/",
  },
  {
    title: "Multiplayer Chess Game",
    description: "A multiplayer chess game",
    technologies: ["React", "Typescript", "WebSockets"],
    longDescription: "",
    images: [],
    link: "https://github.com/akhilsai0099/chessbackend",
    livelink: "https://chessbuddy.netlify.app/",
  },
  {
    title: "Parking Management System",
    description: "A system to manage parking lots",
    technologies: ["Streamlit", "Fastapi", "Sqlite"],
    longDescription: "",

    images: [],
    link: "https://github.com/akhilsai0099/Parking-Management-System-Backend/",
  },
  {
    title: "Course Application Website",
    description: "An application for students to apply for courses",
    technologies: ["Html", "Css", "JavaScript", "Django"],
    longDescription: "",
    images: [],
    link: "https://github.com/akhilsai0099/CollegeWebsite",
  },
];

export const skills = [
  "React",
  "Next.js",
  "Django",
  "Express",
  "Springboot",
  "Python",
  "Node.js",
  "JavaScript",
  "Java",
  "C/C++",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "GitHub",
  "Numpy",
  "Pandas",
  "Matplotlib",
  "Ollama",
  "OpenAI",
  "LangChain",
  "Git",
  "Flask",
  "Docker",
  "Postman",
  "GitHub Actions",
  "AWS",
  "Azure",
  "Terraform",
];

export const experience: Experiencetype[] = [
  {
    company: " Drishya Ai",
    duration: "Sep 2024 - Present",
    role: "Software Intern",
    tasks: [
      "Engineered a monitoring system for AWS Lambdafunctions using AWSXray andaws-sdks, achieving real-time performance tracking and cost optimization",
      "Developed AWS Step Functions replicas using Node.js and AWS SDK, reducing testing costs by 5%",
      "Implemented automated alerting system for service latency and failures, cutting downtime by 15% through proactive maintenance",
    ],
  },
  {
    company: "Nviri Solutions",
    duration: "Jan 2024 - Sep 2024",
    role: "Full Stack Intern",
    tasks: [
      "Designed and implemented an interface for customers to create WhatsApp templates directly within the product, reducing template creation time by 40% and cutting reliance on external tools by 100%.",
      "Developed a feature allowing businesses to automate customer chats using predefined messages and seamlessly take over conversations, increasing customer engagement by 25%.",
      "Built and optimized CI/CD pipelines, automating deployments and reducing deployment time by 35%, leading to more reliable and faster project delivery.",
    ],
  },
];
