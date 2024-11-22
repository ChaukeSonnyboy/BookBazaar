/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Nunito", "sans - serif"],
				secondary: ["Nunito", "sans - serif"],
			},
		},
	},
	plugins: [],
};
