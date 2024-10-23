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
            <p className="text-white leading-relaxed">
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
                <GlowingCard
                  key={index}
                  className="rounded-lg flex w-[calc(50%-0.5rem)] min-w-[240px] max-w-[300px] items-center justify-start p-4 text-center bg-[rgba(30,30,30,0.5)] backdrop-blur-md border-gray-800 text-white"
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-4"
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{link.name}</span>
                      <span className="text-sm ">{link.username}</span>
                    </div>
                  </Link>
                </GlowingCard>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
