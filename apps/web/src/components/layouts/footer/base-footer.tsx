import { ReactNode } from "react";

interface FooterProps {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
}

export function BaseFooter({ leftContent, rightContent }: FooterProps) {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          {leftContent}
        </div>
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          {rightContent}
        </div>
      </div>
    </footer>
  );
} 