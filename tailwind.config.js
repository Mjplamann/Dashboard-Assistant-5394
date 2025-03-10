/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add any custom colors if needed
      },
    },
  },
  plugins: [],
  // Force Tailwind to include utilities
  safelist: [
    'bg-gray-700',
    'bg-gray-800',
    'bg-gray-900',
    'text-white',
    'text-gray-400',
    'text-yellow-400',
    'text-green-500',
    'text-blue-500',
    'text-red-500'
  ]
}