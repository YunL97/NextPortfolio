import { forwardRef } from "react"

interface LeftCalenderDayProps {
  day: Date
  selectedDate: Date | null
  currentDate: Date
  onClick: (day: Date) => void
}

//날짜
const LeftCalenderDay = forwardRef(
  (props: LeftCalenderDayProps, ref?: React.Ref<HTMLDivElement>) => {
    return (
      <button onClick={() => props.onClick(props.day)} className="w-full">
        <div
          className={`p-4 w-full rounded h-16 text-left ${
            props.day.toDateString() ===
            (props.selectedDate?.toDateString() ||
              props.currentDate.toDateString())
              ? "bg-blue-500 text-white"
              : "bg-white text-black"
          }`}
          ref={ref}
        >
          {props.day.getDate()} 1/5 (할일), 600분(공부양)
        </div>
      </button>
    )
  }
)

export default LeftCalenderDay
