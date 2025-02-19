/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				kaisar: ['Kaisar', 'Arial', 'Helvetica', 'sans-serif'],
			},
			colors: {
				primary: '#003140',
				secondary: '#00576e',
				tertiary: '#000910',
				quaternary: '#294881',
				foreground: '#c3deeb',
				gold: '#d3c14b',
				goldlight: '#f2e883',
				golddark: '#ac9b42'
			}
		},
	},
	plugins: [],
};
