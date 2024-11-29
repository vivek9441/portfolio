import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Bjorn Melin - AWS Solutions Architect & Full-Stack Developer',
    template: '%s | Bjorn Melin',
  },
  description: 'AWS Solutions Architect and Full-Stack Developer specializing in cloud architecture and modern web development.',
  keywords: ['AWS', 'Cloud Architecture', 'Full-Stack Development', 'React', 'TypeScript', 'Node.js'],
  authors: [{ name: 'Bjorn Melin' }],
  creator: 'Bjorn Melin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bjornmelin.io',
    title: 'Bjorn Melin - AWS Solutions Architect & Full-Stack Developer',
    description: 'AWS Solutions Architect and Full-Stack Developer specializing in cloud architecture and modern web development.',
    siteName: 'Bjorn Melin',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bjorn Melin - AWS Solutions Architect & Full-Stack Developer',
    description: 'AWS Solutions Architect and Full-Stack Developer specializing in cloud architecture and modern web development.',
    creator: '@bjornmelin',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, 'min-h-screen bg-background antialiased')}>
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
