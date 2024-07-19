"use client"
interface ChartRightButtonProps {
  buttonName: number
  clickButton: (day: number) => void
}

const ChartRightButton = (props: ChartRightButtonProps) => {
  return (
    <>
      <button
        onClick={() => props.clickButton(props.buttonName)}
        className="p-2 bg-blue-500 text-white rounded text-center whitespace-nowrap"
      >
        {props.buttonName}
      </button>
    </>
  )
}

export default ChartRightButton
