/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				kaisar: ['Sansation', 'Helvetica', 'sans-serif'],
				tmr: ['Litoland', 'Times New Roman'],
				h2: ['Quenda', 'Helvetica', 'sans-serif'],
			},
			colors: {
				primary: '#003140',
				secondary: '#00576e',
				tertiary: '#000910',
				quaternary: '#294881',
				foreground: '#c3deeb',
				background: '#294881',
				gold: '#d3c14b',
				goldlight: '#f2e883',
				golddark: '#ac9b42'
			}
		},
	},
	plugins: [],
};

export default config;
