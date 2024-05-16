import { RefObject } from "react"

interface ButtonComponentProps {
  refs: React.RefObject<HTMLDivElement>[]
}

const TopNavigation = (props: any) => {
  const scrollToElement = (index: number) => {
    if (refs[index] && refs[index].current) {
      refs[index].current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <div className=" lg:hidden block mt-3">
        <button
          onClick={() => scrollToElement(0)}
          className="mt-5 mr-5 text-lg font-bold text-gray-600 transition duration-300 cursor-default hover:text-gray-800"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div className=" mt-3 lg:block hidden">
        <button
          onClick={() => scrollToElement(refs.targetRef2)}
          className="mt-5 mr-5 text-lg font-bold text-gray-600 transition duration-300 cursor-default hover:text-gray-800"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToElement(refs.targetRef3)}
          className="mt-5 mr-5 text-lg font-bold text-gray-600 transition duration-300 cursor-default hover:text-gray-800"
        >
          Career
        </button>
        <button
          onClick={() => scrollToElement(refs.targetRef1)}
          className="mt-5 mr-5 text-lg font-bold text-gray-600 transition duration-300 cursor-default hover:text-gray-800"
        >
          About me
        </button>
      </div>
    </>
  )
}

export default TopNavigation
