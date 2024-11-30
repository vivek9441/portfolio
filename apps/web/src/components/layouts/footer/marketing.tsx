import { SocialLinks } from "@/components/shared/SocialLinks";
import { BaseFooter } from "./base-footer";

export function MarketingFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <BaseFooter
      leftContent={
        <div className="text-sm leading-loose text-muted-foreground">
          Built by{" "}
          <a
            href="https://bjornmelin.io"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Bjorn Melin
          </a>
          . © {currentYear} All rights reserved.
        </div>
      }
      rightContent={<SocialLinks />}
    />
  );
} 