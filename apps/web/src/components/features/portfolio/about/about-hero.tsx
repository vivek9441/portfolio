import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutHero() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                        <Image
                            src="/images/about/profile.jpg"
                            alt="Bjorn Melin"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6">About Me</h2>
                        <p className="text-muted-foreground mb-6">
                            I'm an AWS Solutions Architect and Full-Stack Developer with a passion for building
                            scalable cloud solutions. With extensive experience in cloud architecture and
                            modern web development, I help businesses leverage cloud technology to solve
                            complex problems.
                        </p>
                        <div className="space-y-4 mb-8">
                            <div>
                                <h3 className="font-semibold mb-2">Technical Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'AWS',
                                        'Python',
                                        'Infrastructure as Code',
                                        'CI/CD',
                                        'Docker',
                                        'Machine Learning',
                                        'Deep Learning',
                                        'Generative AI',
                                        'AI Agents',
                                        'Agentic AI',
                                        'TensorFlow',
                                        'PyTorch',
                                        'Keras',
                                        'OpenCV',
                                        'Natural Language Processing',
                                        'Computer Vision',
                                        'React',
                                        'Next.js',
                                        'Node.js',
                                        'Tailwind CSS',
                                        'Kubernetes',
                                        'TypeScript',
                                        'Serverless',
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Certifications</h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'AWS Certified Solutions Architect - Associate',
                                        'AWS Certified Developer - Associate',
                                        'AWS Certified SysOps Administrator - Associate',
                                        'AWS Certified AI Practitioner',
                                        'AWS Certified Cloud Practitioner',
                                    ].map((cert) => (
                                        <span
                                            key={cert}
                                            className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                                        >
                                            {cert}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Button asChild>
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
