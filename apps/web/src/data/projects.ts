// data/projects.ts
import { ProjectType } from '@/types/project';

export const projectsData: ProjectType[] = [
    {
        title: "Cloud-Native Portfolio Platform",
        description: "Enterprise-grade AWS infrastructure demonstrating solutions architecture through microservices, serverless APIs, and infrastructure as code.",
        technologies: ["AWS CDK", "Next.js", "TypeScript", "DynamoDB"],
        links: {
            demo: "https://bjornmelin.io",
            github: "https://github.com/bjornmelin/bjornmelin-platform-io"
        }
    },
    {
        title: "Event Management System",
        description: "Scalable event management platform featuring real-time updates, ticket management, and comprehensive API integration.",
        technologies: ["AWS Lambda", "React", "Node.js", "DynamoDB"],
        links: {
            demo: "https://events.bjornmelin.io",
            github: "https://github.com/bjornmelin/event-platform"
        }
    }
];
