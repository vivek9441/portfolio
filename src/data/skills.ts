import { Brain, Cloud, Code, Terminal } from "lucide-react";
import { ElementType } from "react";

export interface SkillCategory {
  name: string;
  Icon: ElementType;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
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
