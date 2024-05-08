import TestComponent from "@/app/(route)/testpage/page"

import Skills from "./Skills"

const Name = () => (
  <div className="flex items-center justify-center w-full h-full -mt-10 text-4xl font-bold text-black">
    <div className="font-blackSans">이윤식 안녕하세요</div>
    <Skills />
    <TestComponent />
  </div>
)

export default Name
