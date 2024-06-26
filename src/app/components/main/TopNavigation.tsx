import { RefObject } from "react"

interface ButtonComponentProps {
  refs: React.RefObject<HTMLDivElement>[]
}

const TopNavigation: React.FC<ButtonComponentProps> = ({ refs }) => {
  const scrollToElement = (index: number) => {
    console.log("asdf")
    if (refs[index] && refs[index].current) {
      refs[index].current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <button
        onClick={() => scrollToElement(0)}
        className="mt-5 mr-5 text-lg font-bold text-gray-600 transition duration-300 cursor-default hover:text-gray-800"
      >
        Skills
      </button>
      <button
        onClick={() => scrollToElement(1)}
        className="mt-5 mr-5 text-lg font-bold text-gray-600 transition duration-300 cursor-default hover:text-gray-800"
      >
        Career
      </button>
      <button
        onClick={() => scrollToElement(2)}
        className="mt-5 mr-5 text-lg font-bold text-gray-600 transition duration-300 cursor-default hover:text-gray-800"
      >
        About me
      </button>
    </>
  )
}

export default TopNavigation
