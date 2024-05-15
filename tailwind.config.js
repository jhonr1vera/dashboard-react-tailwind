/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "Lime Green": "hsl(163, 72%, 41%)",
        "Bright Red": "hsl(356, 69%, 56%)",
        "Facebook": "hsl(208, 92%, 53%)",
        "Twitter": "hsl(203, 89%, 53%)",
        "YouTube": "hsl(348, 97%, 39%)",
        "Toggle-light": "hsl(230, 22%, 74%)",
        // Dark
        "Very_Dark_Blue": "hsl(230, 17%, 14%)",
        "Very_Dark_Blue-Top": "hsl(232, 19%, 15%)",
        "Dark-Desaturated-Blue": "hsl(228, 28%, 20%)",
        "Desaturated-Blue": "hsl(228, 34%, 66%)",
        "White": "hsl(0, 0%, 100%)",
        // light
        "Very-Pale-Blue": "hsl(225, 100%, 98%)",
        "Light-Grayish-Blue": "hsl(227, 47%, 96%)",
        "Dark-Grayish-Blue": "hsl(228, 12%, 44%)",
        "Very-Dark-Blue": "hsl(230, 17%, 14%)",
      },
      backgroundImage: {
        "Instagram": "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        "Toggle-Dark": "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
      },
      fontFamily: {
        Inter: ["Inter"], //We are calling it from index.css
      },
    },
  },
  plugins: [],
};
