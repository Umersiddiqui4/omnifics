/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#87CEEB',
        accent: '#5BA0F2',
        success: '#2BA24C',
        dark: '#000910',
        light: '#f1f4fa',
        orange: '#EA9223',
        red: '#E43E2B',
        green: '#2BA24C',
        blue: '#4A90E2',
      },
      fontFamily: {
        'default': ['Roboto', 'system-ui', 'sans-serif'],
        'heading': ['Raleway', 'sans-serif'],
        'nav': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
