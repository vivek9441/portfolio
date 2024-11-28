import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bjorn Melin - Portfolio',
  description: 'AWS Solutions Architect and Full-Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
