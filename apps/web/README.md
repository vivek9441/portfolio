# Bjorn Melin's Portfolio Website

A modern portfolio website built with Next.js 15, React 19, and shadcn/ui components.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **State Management:** tRPC + React Query
- **Database:** Prisma + PostgreSQL
- **Authentication:** NextAuth.js
- **Deployment:** AWS (CDK)

## Features

- Modern, responsive design
- Dark mode support
- Server-side rendering
- Type-safe API routes with tRPC
- Optimized images and performance
- SEO optimized
- AWS infrastructure as code

## Getting Started

1. Clone the repository:
\`\`\`bash
git clone https://github.com/bjornmelin/bjornmelin-platform-io.git
\`\`\`

2. Install dependencies:
\`\`\`bash
pnpm install
\`\`\`

3. Create a \`.env\` file:
\`\`\`bash
cp .env.example .env
\`\`\`

4. Start the development server:
\`\`\`bash
pnpm dev
\`\`\`

## Project Structure

\`\`\`
apps/web/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── layout/         # Layout components
│   │   ├── sections/       # Page sections
│   │   └── shared/         # Shared components
│   ├── lib/                # Utilities and helpers
│   ├── server/             # Server-side code
│   ├── styles/             # Global styles
│   └── types/              # TypeScript types
├── public/                 # Static assets
└── ...config files
\`\`\`

## Development

- \`pnpm dev\`: Start development server
- \`pnpm build\`: Build for production
- \`pnpm start\`: Start production server
- \`pnpm lint\`: Run ESLint
- \`pnpm typecheck\`: Run TypeScript checks
- \`pnpm format\`: Format code with Prettier

## License

MIT © Bjorn Melin 