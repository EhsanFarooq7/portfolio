import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Ehsan Farooq | Full Stack Developer & AI Enthusiast",
  description: "Top Rated Upwork Freelancer. Full Stack Developer specializing in Python, MERN Stack, Next.js, and CRM Automation.",
  keywords: ["Full Stack Developer", "Next.js", "Django", "MERN", "AI", "GoHighLevel", "Upwork Top Rated"],
  authors: [{ name: "Muhammad Ehsan Farooq" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}