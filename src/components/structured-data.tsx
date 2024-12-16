export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bjorn Melin",
    url: "https://bjornmelin.com",
    jobTitle: "Senior Data Scientist & Cloud Solutions Architect",
    description:
      "Senior Data Scientist and Cloud Solutions Architect specializing in AI/ML, GenAI innovation, and cloud architecture. 6x AWS Certified professional.",
    sameAs: [
      "https://github.com/bjornmelin",
      "https://linkedin.com/in/bjornmelin",
      "https://orcid.org/0000-0003-3891-5522",
      "https://www.coursera.org/learner/bjorn-melin",
    ],
    knowsAbout: [
      "AWS Cloud Architecture",
      "Serverless Computing",
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bjorn Melin - Portfolio",
    url: "https://bjornmelin.com",
    description:
      "Personal portfolio and blog of Bjorn Melin, AWS Solutions Architect and Full Stack Developer.",
    author: {
      "@type": "Person",
      name: "Bjorn Melin",
    },
  };
}

interface StructuredDataProps {
  type: "person" | "website" | "both";
}

export default function StructuredData({ type }: StructuredDataProps) {
  const schemas = [];

  if (type === "person" || type === "both") {
    schemas.push(generatePersonSchema());
  }

  if (type === "website" || type === "both") {
    schemas.push(generateWebsiteSchema());
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
