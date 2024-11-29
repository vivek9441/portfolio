import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GitHubIcon, LinkedInIcon } from '@/components/shared/icons';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me for collaboration opportunities or questions.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always interested in hearing about new opportunities, collaborations,
            or just having a chat about cloud architecture and web development.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Connect with Me</h2>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="https://linkedin.com/in/bjornmelin" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="h-5 w-5 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/bjornmelin" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="h-5 w-5 mr-2" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Email</h2>
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <Link href="mailto:bjorn@bjornmelin.io">
                  bjorn@bjornmelin.io
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
