import { MarketingNavbar } from "@/components/layouts/navbar/marketing";
import { MarketingFooter } from "@/components/layouts/footer/marketing";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MarketingNavbar />
      <main className="flex-1">{children}</main>
      <MarketingFooter />
    </>
  );
} 