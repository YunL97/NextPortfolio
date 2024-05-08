import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontFamily: {
      sans: ["var(--noto_sans_kr)"], // fonts.ts에서 variable로 설정한 CSS 변수를 불러와 적용합니다.
      happySans: ["var(--single_day)"], // fonts.ts에서 variable로 설정한 CSS 변수를 불러와 적용합니다.
      blackSans: ["var(--black_sans_kr)"]
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: [],
  darkMode: "class" //기본적으로 mediia 속성을 사용하는데 class로 설정해주면 class를 add, remove하는것을 통해 다크모드 여부를 컨트롤 할수 있게 해준다
}
export default config
