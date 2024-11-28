import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    // Shared content across the monorepo
    '../../apps/web/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#93C5FD',
          DEFAULT: '#3B82F6',
          dark: '#1E40AF'
        },
        muted: '#9CA3AF',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444'
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        mono: ['Fira Code', 'Monaco', 'monospace']
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
  corePlugins: {
    // Optional: Disable/reset certain core plugins if needed
    preflight: true
  }
};

export default config;
