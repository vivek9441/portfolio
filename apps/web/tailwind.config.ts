import sharedConfig from "@bjornmelin/tailwind-config";
import { Config } from 'tailwindcss';

const config: Config = {
	presets: [sharedConfig],
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"../../packages/ui/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				brand: "#1E40AF", // Custom theme color
			}
		}
	}
};

export default config;
