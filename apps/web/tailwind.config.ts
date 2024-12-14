import { Config } from 'tailwindcss';
import sharedConfig from "../../packages/config/tailwind-config/tailwind.config";

const config: Config = {
	// Extend the shared config
	...sharedConfig,
	// Override content paths for web app
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'../../packages/ui/src/**/*.{js,ts,jsx,tsx}'
	],
};

export default config;
