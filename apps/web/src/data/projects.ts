// data/projects.ts
import { ProjectType } from '@/types/project';

export const projectsData: ProjectType[] = [
    {
        title: "Portfolio Website",
        description: "A modern portfolio website built with Next.js, React, and AWS services.",
        category: "cloud",
        image: "/projects/portfolio.jpg",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AWS", "AWS CDK"],
        links: {
            live: "https://bjornmelin.io",
            github: "https://github.com/bjornmelin/bjornmelin-platform-io",
        },
        featured: true
    },
    // {
    //     title: "Cloud-Native Portfolio Platform",
    //     description: "Enterprise-grade AWS infrastructure demonstrating solutions architecture through microservices, serverless APIs, and infrastructure as code.",
    //     category: "cloud",
    //     technologies: ["AWS CDK", "Next.js", "TypeScript", "DynamoDB"],
    //     links: {
    //         live: "https://bjornmelin.io",
    //         github: "https://github.com/bjornmelin/bjornmelin-platform-io"
    //     }
    // },
    {
        title: "Event Management System",
        description: "Scalable event management platform featuring real-time updates, ticket management, and comprehensive API integration.",
        category: "cloud",
        technologies: ["AWS Lambda", "React", "Node.js", "DynamoDB"],
        links: {
            live: "https://events.bjornmelin.io",
            github: "https://github.com/bjornmelin/event-platform"
        },
        featured: false
    }
];
