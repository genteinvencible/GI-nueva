/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Suisse', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgba(20, 18, 16, 0.85)',
            '--tw-prose-headings': '#141210',
            '--tw-prose-lead': 'rgba(20, 18, 16, 0.7)',
            '--tw-prose-links': '#141210',
            '--tw-prose-bold': '#141210',
            '--tw-prose-counters': 'rgba(20, 18, 16, 0.5)',
            '--tw-prose-bullets': 'rgba(20, 18, 16, 0.4)',
            '--tw-prose-hr': 'rgba(20, 18, 16, 0.1)',
            '--tw-prose-quotes': 'rgba(20, 18, 16, 0.7)',
            '--tw-prose-quote-borders': 'rgba(20, 18, 16, 0.2)',
            '--tw-prose-captions': 'rgba(20, 18, 16, 0.5)',
            '--tw-prose-code': '#141210',
            '--tw-prose-pre-code': '#f7f3ed',
            '--tw-prose-pre-bg': '#141210',
            '--tw-prose-th-borders': 'rgba(20, 18, 16, 0.2)',
            '--tw-prose-td-borders': 'rgba(20, 18, 16, 0.1)',
            '--tw-prose-invert-body': 'rgba(247, 243, 237, 0.85)',
            '--tw-prose-invert-headings': '#f7f3ed',
            '--tw-prose-invert-lead': 'rgba(247, 243, 237, 0.7)',
            '--tw-prose-invert-links': '#f7f3ed',
            '--tw-prose-invert-bold': '#f7f3ed',
            '--tw-prose-invert-counters': 'rgba(247, 243, 237, 0.5)',
            '--tw-prose-invert-bullets': 'rgba(247, 243, 237, 0.4)',
            '--tw-prose-invert-hr': 'rgba(247, 243, 237, 0.1)',
            '--tw-prose-invert-quotes': 'rgba(247, 243, 237, 0.7)',
            '--tw-prose-invert-quote-borders': 'rgba(247, 243, 237, 0.2)',
            '--tw-prose-invert-captions': 'rgba(247, 243, 237, 0.5)',
            '--tw-prose-invert-code': '#f7f3ed',
            '--tw-prose-invert-pre-code': '#f7f3ed',
            '--tw-prose-invert-pre-bg': '#1c1a17',
            '--tw-prose-invert-th-borders': 'rgba(247, 243, 237, 0.2)',
            '--tw-prose-invert-td-borders': 'rgba(247, 243, 237, 0.1)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
