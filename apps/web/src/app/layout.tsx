import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "@bjornmelin/ui/styles.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Bjorn Melin - AWS Solutions Architect & Full-Stack Developer",
    template: "%s | Bjorn Melin",
  },
  description:
    "AWS Solutions Architect and Full-Stack Developer specializing in cloud architecture and modern web development.",
  keywords: [
    "AWS",
    "Cloud Architecture",
    "Full-Stack Development",
    "React",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Bjorn Melin" }],
  creator: "Bjorn Melin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bjornmelin.io",
    title: "Bjorn Melin - AWS Solutions Architect & Full-Stack Developer",
    description:
      "AWS Solutions Architect and Full-Stack Developer specializing in cloud architecture and modern web development.",
    siteName: "Bjorn Melin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bjorn Melin - AWS Solutions Architect & Full-Stack Developer",
    description:
      "AWS Solutions Architect and Full-Stack Developer specializing in cloud architecture and modern web development.",
    creator: "@bjornmelin",
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
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background antialiased", inter.className)}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
