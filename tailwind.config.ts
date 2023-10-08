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
			CamptonThin: ["Campton-Thin"],
			CamptonThinItalic: ["Campton-ThinItalic"],
			CamptonExtraLight: ["Campton-ExtraLight"],
			CamptonExtraLightItalic: ["Campton-ExtraLightItalic"],
			CamptonLight: ["Campton-Light"],
			CamptonLightItalic: ["Campton-LightItalic"],
			CamptonBook: ["Campton-Book"],
			CamptonBookItalic: ["Campton-BookItalic"],
			CamptonMedium: ["Campton-Medium"],
			CamptonMediumItalic: ["Campton-MediumItalic"],
			CamptonSemiBold: ["Campton-SemiBold"],
			CamptonSemiBoldItalic: ["Campton-SemiBoldItalic"],
			CamptonBold: ["Campton-Bold"],
			CamptonBoldItalic: ["Campton-BoldItalic"],
			CamptonExtraBold: ["Campton-ExtraBold"],
			CamptonExtraBoldItalic: ["Campton-ExtraBoldItalic"],
			CamptonBlack: ["Campton-Black"],
			CamptonBlackItalic: ["Campton-BlackItalic"],
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light"],
	},
};
export default config;
