// app/about/components/Certifications.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const certifications = [
    {
        title: "AWS Solutions Architect Associate",
        image: "/images/aws-saa.png", // You'll need to add these images
        issuer: "Amazon Web Services",
        issueDate: "2024",
        link: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-solutions-architect-associate"
    },
    {
        title: "AWS Developer Associate",
        image: "/images/aws-da.png",
        issuer: "Amazon Web Services",
        issueDate: "2024",
        link: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-developer-associate"
    }
];

export default function Certifications() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {certifications.map((cert) => (
                        <Card key={cert.title}>
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="relative w-16 h-16">
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">{cert.title}</CardTitle>
                                        <p className="text-sm text-muted-foreground">
                                            {cert.issuer} - {cert.issueDate}
                                        </p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Button variant="ghost" size="sm" asChild>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        View Certificate <ExternalLink className="h-4 w-4" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
