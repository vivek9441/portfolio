"use client";

import React, { ElementType } from "react";
import { useRouter } from "next/navigation";
import {
  Brain,
  Cloud,
  Code,
  GraduationCap,
  Sparkles,
  Terminal,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SkillCategory {
  name: string;
  Icon: ElementType;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    Icon: Brain,
    color: "bg-purple-500/10 text-purple-500",
    skills: ["Deep Learning", "NLP", "GenAI", "LLMs", "RAG"],
  },
  {
    name: "Cloud Architecture",
    Icon: Cloud,
    color: "bg-blue-500/10 text-blue-500",
    skills: ["AWS", "Serverless", "IaC", "CDK", "Microservices"],
  },
  {
    name: "Development",
    Icon: Code,
    color: "bg-green-500/10 text-green-500",
    skills: ["Full-Stack", "API Design", "CI/CD", "DevOps", "TDD"],
  },
  {
    name: "Technologies",
    Icon: Terminal,
    color: "bg-orange-500/10 text-orange-500",
    skills: ["Python", "TypeScript", "Node.js", "React", "Next.js"],
  },
];

export function About() {
  const router = useRouter();

  const handleLearnMore = () => {
    router.push("/about");
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="w-3 h-3 mr-2" />
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Crafting AI Solutions &{" "}
            <span className="text-primary">Cloud Architecture</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Senior Data Scientist and AWS Solutions Architect specializing in
            AI/ML innovations and scalable cloud architecture
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 items-start mb-16">
          {/* Professional Summary */}
          <Card className="lg:col-span-2 p-6 backdrop-blur-xl bg-card/50 border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg bg-primary/10`}>
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Background</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              As a Senior Data Scientist and Cloud Solutions Architect with 6
              AWS certifications, I specialize in developing cutting-edge AI/ML
              solutions and GenAI innovations. My expertise spans cloud
              architecture, machine learning, and building scalable AI solutions
              that drive business value.
            </p>
          </Card>

          {/* Skills Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card
                key={category.name}
                className="p-6 backdrop-blur-xl bg-card/50 border-primary/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <category.Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`${category.color} hover:scale-105 transition-transform`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button onClick={handleLearnMore} size="lg" className="group">
            Learn More About Me
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
