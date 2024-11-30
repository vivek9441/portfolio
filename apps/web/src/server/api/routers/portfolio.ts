import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

const portfolioItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  technologies: z.array(z.string()),
  images: z.array(z.object({
    url: z.string().url(),
    alt: z.string(),
  })),
  links: z.object({
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    demo: z.string().url().optional(),
  }),
});

const getPortfolioInputSchema = z.object({
  limit: z.number().min(1).max(100).optional(),
  cursor: z.string().optional(),
  category: z.string().optional(),
});

export const portfolioRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(getPortfolioInputSchema)
    .query(async ({ input }: { input: z.infer<typeof getPortfolioInputSchema> }) => {
      const items = [
        {
          id: '1',
          title: 'Portfolio Website',
          description: 'A modern portfolio website built with Next.js, React, and AWS services.',
          category: 'Web Development',
          technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'AWS'],
          images: [
            {
              url: '/projects/portfolio.jpg',
              alt: 'Portfolio Website',
            },
          ],
          links: {
            github: 'https://github.com/bjornmelin/bjornmelin-platform-io',
            live: 'https://bjornmelin.io',
          },
        },
      ];

      return {
        items,
        nextCursor: undefined,
      };
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }: { input: { id: string } }) => {
      return {
        id: input.id,
        title: 'Portfolio Website',
        description: 'A modern portfolio website built with Next.js, React, and AWS services.',
        category: 'Web Development',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'AWS'],
        images: [
          {
            url: '/projects/portfolio.jpg',
            alt: 'Portfolio Website',
          },
        ],
        links: {
          github: 'https://github.com/bjornmelin/bjornmelin-platform-io',
          live: 'https://bjornmelin.io',
        },
      };
    }),

  getCategories: publicProcedure
    .query(async () => {
      return ['Web Development', 'Cloud Architecture', 'DevOps'];
    }),
}); 