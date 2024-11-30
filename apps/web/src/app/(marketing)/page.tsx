import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

export default function MarketingPage() {
  return (
    <div className="flex-1">
      <Hero />
      <About />
      <FeaturedProjects />
    </div>
  );
} 