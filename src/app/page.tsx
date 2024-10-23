import Home from "@/components/Portfolio/Home";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Akhil Sai Boppudi",
  description: "Full Stack Developer",

  keywords: [
    "Akhil Sai Boppudi",
    "Full Stack Developer",
    "Portfolio",
    "Web Development",
  ],

  openGraph: {
    title: "Akhil Sai Boppudi - Full Stack Developer",
    description: "Portfolio of Akhil Sai Boppudi, a Full Stack Developer.",
    url: "https://your-website-url.com",
    siteName: "Akhil Sai Boppudi",
    images: [
      {
        url: "https://your-website-url.com/your-profile-image.jpg",
        alt: "Akhil Sai Boppudi Profile Picture",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Akhil Sai Boppudi - Full Stack Developer",
    description: "Portfolio of Akhil Sai Boppudi, a Full Stack Developer.",
  },
};

export default function PortfolioPage() {
  return <Home />;
}
