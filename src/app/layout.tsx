import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import StructuredData from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    template: "%s | Bjorn Melin",
    default: "Bjorn Melin - Senior Data Scientist & Cloud Solutions Architect",
  },
  description:
    "Senior Data Scientist and Cloud Solutions Architect specializing in AI/ML, GenAI innovation, cloud architecture, and modern development.",
  keywords: [
    "AWS",
    "Cloud Architecture",
    "Data Science",
    "AI/ML",
    "GenAI",
    "Machine Learning",
    "Solutions Architect",
    "AWS Certified",
    "Innovation",
    "Cloud Computing",
    "Full-Stack Development",
    "Python",
    "React",
    "Next.js",
    "Serverless",
    "TypeScript",
    "Node.js",
    "Cloud Computing",
  ],
  authors: [{ name: "Bjorn Melin" }],
  creator: "Bjorn Melin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers disableTransitionOnChange>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 pt-16 pb-8">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        <StructuredData type="both" />
      </body>
    </html>
  );
}
