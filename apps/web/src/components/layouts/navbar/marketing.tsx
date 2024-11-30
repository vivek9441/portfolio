import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BaseNavbar } from "./base-navbar";

const marketingLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

function GitHubButton() {
  return (
    <Button variant="ghost" className="mr-6" asChild>
      <Link
        href="https://github.com/bjornmelin"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Link>
    </Button>
  );
}

export function MarketingNavbar() {
  return (
    <BaseNavbar
      links={marketingLinks}
      rightContent={<GitHubButton />}
    />
  );
} 