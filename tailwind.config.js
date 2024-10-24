/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				18: 'repeat(18, minmax(0, 1fr))',
			},
		},
	},
	plugins: [],
};
