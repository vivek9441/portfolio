import { Config } from 'tailwindcss';
import sharedConfig from "../../packages/config/tailwind-config/tailwind.config";

const config: Config = {
    ...sharedConfig,
    content: [
        './src/**/*.{js,ts,jsx,tsx}'
    ],
};

export default config;
