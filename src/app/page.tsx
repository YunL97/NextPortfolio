"use client"
//cmd shift t => 테일윈드 정렬
import { RefObject, useRef } from "react"

export default function Home() {
  const targetRef1 = useRef<HTMLDivElement>(null)
  const targetRef2 = useRef<HTMLDivElement>(null)

  return (
    <>
      <div className="bg-gray-200 h-80">
        <div className="inset-0 flex justify-end w-10/12 max-w-full">
          <div className="flex">
            <button
              onClick={() => scrollToElement(targetRef1)}
              className="mt-5 mr-5 text-lg font-bold text-gray-600 transition duration-300 cursor-default hover:text-gray-800"
            >
              About me
            </button>
            <button
              onClick={() => scrollToElement(targetRef2)}
              className="mt-5 mr-auto text-lg font-bold text-gray-600 transition duration-300 cursor-default hover:text-gray-800"
            >
              Career
            </button>
            {/* <button onClick={scrollToElement}>asdad</button> */}
          </div>
        </div>
      </div>
      {/* {About me} */}
      <h1 ref={targetRef1}>Hello world!</h1>
      {/* {Career} */}
      <h1 ref={targetRef2}>Hello world!</h1>
    </>
  )
}

const scrollToElement = (targetRef: RefObject<HTMLDivElement>) => {
  if (targetRef.current) {
    targetRef.current.scrollIntoView({ behavior: "smooth" })
  }
}
