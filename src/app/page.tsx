"use client"
//cmd shift t => 테일윈드 정렬
import { RefObject, useRef } from "react"
import Name from "./components/main/Name"
import Skills from "./components/main/Skills"
import TopNavigation from "./components/main/TopNavigation"

export default function Home() {
  const targetRef1 = useRef<HTMLDivElement>(null)
  const targetRef2 = useRef<HTMLDivElement>(null)
  const targetRef3 = useRef<HTMLDivElement>(null)

  return (
    <>
      <div className="bg-gray-200 h-96">
        <div className="inset-0 flex justify-end w-11/12 max-w-full ">
          <TopNavigation refs={[targetRef1, targetRef2, targetRef3]} />
        </div>
        <Name />
      </div>
      {/* Skills */}
      <div ref={targetRef1}>
        <Skills />
      </div>
      {/* Career */}
      <h1 ref={targetRef2}>Hello world!</h1>
      {/* About me */}
      <h1 ref={targetRef2}>Hello world!</h1>
    </>
  )
}

const scrollToElement = (targetRef: RefObject<HTMLDivElement>) => {
  if (targetRef.current) {
    targetRef.current.scrollIntoView({ behavior: "smooth" })
  }
}
