"use client"
//cmd shift t => 테일윈드 정렬
import { RefObject, useRef } from "react"
import Name from "./components/main/Name"
import Skills from "./components/main/Skills"

export default function Home() {
  const targetRef1 = useRef<HTMLDivElement>(null)
  const targetRef2 = useRef<HTMLDivElement>(null)
  const targetRef3 = useRef<HTMLDivElement>(null)

  return (
    <>
      <div className="bg-gray-200 h-80">
        <div className="inset-0 flex justify-end w-11/12 max-w-full ">
          <div className="flex mt-3">
            <button
              onClick={() => scrollToElement(targetRef2)}
              className="mt-5 mr-5 text-lg font-bold text-gray-600 transition duration-300 cursor-default hover:text-gray-800"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToElement(targetRef3)}
              className="mt-5 mr-5 text-lg font-bold text-gray-600 transition duration-300 cursor-default hover:text-gray-800"
            >
              Career
            </button>
            <button
              onClick={() => scrollToElement(targetRef1)}
              className="mt-5 mr-5 text-lg font-bold text-gray-600 transition duration-300 cursor-default hover:text-gray-800"
            >
              About me
            </button>
          </div>
        </div>
        <Name />
      </div>
      {/* Skills */}
      <div ref={targetRef2}>
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
