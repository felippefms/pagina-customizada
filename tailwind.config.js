/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation:{
        'fadein': 'fadein 2.5s',
      },
      keyframes: {
        fadein: {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
    },
  },
  plugins: [],
  },
}
