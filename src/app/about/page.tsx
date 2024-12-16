import { Metadata } from "next";
import { About } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "About - Bjorn Melin | Senior Data Scientist & Cloud Architect",
  description:
    "Learn more about Bjorn Melin, a Senior Data Scientist and Cloud Solutions Architect with 6 AWS certifications, specializing in AI/ML solutions and cloud architecture.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <About />
      {/* You can add more sections here specific to the About page */}
    </main>
  );
} 