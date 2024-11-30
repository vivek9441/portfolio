import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

interface BlogPostCardProps {
    title: string;
    excerpt: string;
    date: string;
    href: string;
}

export function BlogPostCard({ title, excerpt, date, href }: BlogPostCardProps) {
    return (
        <Card className="transition-colors hover:bg-muted/50">
            <Link href={href}>
                <CardHeader>
                    <div className="space-y-1">
                        <CardTitle>{title}</CardTitle>
                        <CardDescription className="text-base">{excerpt}</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground mt-4">
                        {formatDate(date)}
                    </div>
                </CardHeader>
            </Link>
        </Card>
    );
}
