import Link from "next/link";
import { ReactNode } from "react";

interface NavbarProps {
  links: Array<{
    href: string;
    label: string;
  }>;
  rightContent?: ReactNode;
  logo?: ReactNode;
}

export function BaseNavbar({ links, rightContent, logo }: NavbarProps) {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {logo || (
              <span className="hidden font-bold sm:inline-block">
                Bjorn Melin
              </span>
            )}
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-foreground/80 text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none" />
          <nav className="flex items-center">
            {rightContent}
          </nav>
        </div>
      </div>
    </nav>
  );
} 