// components/layout/Footer.tsx
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
    return (
        <footer className="bg-white border-t">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="flex space-x-6 mb-6">
                        <Button variant="ghost" size="icon" asChild>
                            <a
                                href="https://github.com/bjornmelin"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a
                                href="https://linkedin.com/in/bjorn-melin"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a
                                href="https://twitter.com/bjornmelin"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Bjorn Melin. Built with Next.js and AWS.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
