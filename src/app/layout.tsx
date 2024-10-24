import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
    url: "https://akhilsaiboppudi.vercel.app",
    siteName: "Akhil Sai Boppudi",
    images: [
      {
        url: "https://akhilsaiboppudi.vercel.app/profile.png",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <link rel="icon" href="/favicon.ico" />
        {children}
      </body>
    </html>
  );
}
