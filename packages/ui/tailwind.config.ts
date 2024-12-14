import { Config } from 'tailwindcss';
import sharedConfig from "@bjornmelin/tailwind-config";

const config: Config = {
    // Extend the shared config
    ...sharedConfig,
    // Override content paths for UI package
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
};

export default config;
