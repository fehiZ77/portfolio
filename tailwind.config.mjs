/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				canvas: "var(--color-canvas)",
				surface: "var(--color-surface)",
				navy: "var(--color-navy)",
				ink: "var(--color-ink)",
				muted: "var(--color-muted)",
				accent: "var(--color-accent)",
				"accent-text": "var(--color-accent-text)",
				hair: "var(--color-hair)",
				strong: "var(--color-strong)",
				"on-navy": "var(--color-on-navy)",
				chip: "var(--color-chip)",
			},
			fontFamily: {
				sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
				mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
			},
			maxWidth: {
				page: "60rem",
			},
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
