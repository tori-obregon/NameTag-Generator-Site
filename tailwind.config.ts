import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'handwriting': ['Kalam', 'cursive'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f8b3cc",
          "secondary": "#ed5835",        
          "accent": "#c7b65d",        
          "neutral": "#ff00ff",        
          "base-100": "#f3e7d8",        
          "info": "#0000ff",        
          "success": "#00ffff",
          "warning": "#00ff00",
          "error": "#ff0000"
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/typography'), 
    require('daisyui')
  ],
};
export default config;
