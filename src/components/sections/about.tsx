"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../shared/section-header";

const skills = [
  // Cloud & Architecture
  { name: "AWS", category: "Cloud" },
  { name: "Cloud Architecture", category: "Cloud" },
  { name: "Cloud Computing", category: "Cloud" },
  { name: "Serverless", category: "Cloud" },
  { name: "Infrastructure as Code", category: "Cloud" },
  { name: "Amazon Web Services", category: "Cloud" },
  { name: "AWS CDK", category: "Cloud" },

  // AI & Data Science
  { name: "Data Science", category: "AI" },
  { name: "AI/ML", category: "AI" },
  { name: "Machine Learning", category: "AI" },
  { name: "Generative AI - GenAI", category: "AI" },
  { name: "Artificial Intelligence - AI", category: "AI" },
  { name: "Innovation", category: "AI" },
  { name: "Deep Learning", category: "AI" },
  { name: "Natural Language Processing", category: "AI" },
  { name: "Retrieval Augmented Generation", category: "AI" },
  { name: "Large Language Models", category: "AI" },

  // Development
  { name: "Full-Stack Development", category: "Development" },
  { name: "API Design", category: "Development" },
  { name: "Microservices", category: "Development" },
  { name: "CI/CD", category: "Development" },
  { name: "DevOps", category: "Development" },
  { name: "Test-Driven Development", category: "Development" },
  
  // Languages & Frameworks
  { name: "Python", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "Node.js", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "GraphQL", category: "Backend" },
  { name: "REST", category: "Backend" },
  { name: "trpc", category: "Backend" },
  
  // Tools & Platforms
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "GitHub Actions", category: "Tools" },
  { name: "Databricks", category: "Tools" },
];

export function About() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="About Me"
          description="Passionate about building innovative AI/ML solutions and scalable cloud architectures"
        />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Background</h3>
            <p className="text-muted-foreground">
              As a Senior Data Scientist and Cloud Solutions Architect with 6 AWS certifications, 
              I specialize in developing cutting-edge AI/ML solutions and GenAI innovations. 
              My expertise spans cloud architecture, machine learning, and building scalable 
              AI solutions that drive business value. With a strong foundation in both data 
              science and cloud computing, I focus on creating efficient, production-ready 
              solutions that leverage the latest advancements in AI technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1 rounded-full bg-primary/10 text-sm font-medium"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
