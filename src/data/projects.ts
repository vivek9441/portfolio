import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and AWS services.",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AWS"],
    category: "Web Development",
    links: {
      github: "https://github.com/bjornmelin/bjornmelin-platform-io",
      live: "https://bjornmelin.io",
    },
    featured: true,
  },
  {
    id: "2",
    title: "AIScout",
    description:
      "Real-time AI/ML content aggregator and discovery platform. Automatically curates cutting-edge research papers, repositories, articles, and discussions about artificial intelligence, machine learning, and LLMs. Built with React, Python, and AWS.",
    image: "/projects/ai-scout.png",
    technologies: [
      "React",
      "Python",
      "AWS",
      "Real-Time",
      "AI",
      "ML",
      "Technology",
      "AI-Research",
      "Content-Discovery",
    ],
    category: "AI & Machine Learning",
    links: {
      github: "https://github.com/BjornMelin/aiscout",
      //   demo: 'https://demo.example.com',
    },
    featured: true,
  },
  {
    id: "3",
    title: "PDFusion",
    description:
      "A lightweight Python utility for effortlessly merging multiple PDF files into a single document.",
    image: "/projects/pdfusion.png",
    technologies: [
      "Python",
      "CLI",
      "PDF",
      "Automation",
      "Utilities",
      "Python-Library",
      "File-Management",
      "Command-Line-Tool",
      "Document-Management",
      "Batch-Processing",
      "Pypdf2",
      "PDF-Manipulation",
      "PDF-Merger",
      "Document-Processing",
      "PDF-Tools",
    ],
    category: "AI & Machine Learning",
    links: {
      github: "https://github.com/BjornMelin/pdfusion",
    },
    featured: true,
  },
];
