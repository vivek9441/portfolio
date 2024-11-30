import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="ghost" size="icon" asChild>
        <Link
          href="https://github.com/bjornmelin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </Link>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <Link
          href="https://linkedin.com/in/bjornmelin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link
          href="https://orcid.org/0000-0003-3891-5522"
          target="_blank"
          rel="noopener noreferrer"
        >
          ORCID
        </Link>
      </Button>
    </div>
  );
}
