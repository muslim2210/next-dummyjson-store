import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        'primary-dark': '#1E40AF',
        'gray-soft': '#E5E7EB',
      },
    },
  },
  plugins: [],
}

export default config
