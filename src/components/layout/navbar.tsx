"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-foreground/60 hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-foreground/60 hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-foreground/60 hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-foreground/60 hover:text-foreground"
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-foreground/60 hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-foreground/60 hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-foreground/60 hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-foreground/60 hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex items-center">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
