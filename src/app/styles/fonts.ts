// https://fonts.google.com/variablefonts 여기에서 Fonts를 찾아서 추가합니다.
import { Noto_Sans_KR, Single_Day, Black_Han_Sans } from "next/font/google"

// Font의 classnames를 합치는 공통 함수
const sumClass = (...classnames: string[]) => {
  return classnames.join(" ")
}

// noto_sans_kr에 Noto_Sans_KR 적용
const noto_sans_kr = Noto_Sans_KR({
  subsets: ["latin"], // preload에 사용할 subsets 또는 preload: false
  weight: ["100", "400", "700", "900"], // 사용할 wght 설정
  variable: "--noto_sans_kr", // tailwindcss에서 사용할 수 있도록 CSS 변수 방식 설정
  display: "swap"
})

// single_day에 Single_Day 적용
const single_day = Single_Day({
  weight: ["400"],
  variable: "--single_day",
  display: "swap"
})

const black_han_hans = Black_Han_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--black_sans_kr"
})

// 폰트가 추가되면 여기에 ,(콤마)로 구분하여 추가함 - 외부에서 FontClassNames를 불러와 적용함
export const FontClassNames = sumClass(
  noto_sans_kr.className,
  single_day.variable,
  black_han_hans.variable
)
