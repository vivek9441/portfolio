import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - Bjorn Melin",
    description: "Technical insights and articles about cloud architecture, web development, and AI.",
};

export default function BlogPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Technical Blog</h1>
            <p className="text-muted-foreground text-lg mb-12">
                Insights and articles about cloud architecture, modern web development, and artificial intelligence.
            </p>
            <div className="grid gap-8">
                <BlogPostCard
                    title="Building a Modern Portfolio with Next.js and AWS"
                    excerpt="A deep dive into creating a cloud-native portfolio platform using Next.js 13, React Server Components, and AWS infrastructure."
                    date="2024-03-15"
                    href="/blog/modern-portfolio-nextjs-aws"
                />
            </div>
        </div>
    );
}
