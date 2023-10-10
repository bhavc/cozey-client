import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			Campton: ["Campton"],
			Larsseit: ["Larsseit"],
			Quincy: ["Quincy"],
		},
		screens: {
			sm: "600px",
			md: "768px",
			lgNav: "870px",
			lg: "1024px",
			xl: "1280px",
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light"],
	},
};
export default config;
