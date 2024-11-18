import baseConfig from "../../packages/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";

const config = {
	presets: [baseConfig],
	content: ["./src/**/*.{ts,tsx}"],
} satisfies Config;

export default config;
