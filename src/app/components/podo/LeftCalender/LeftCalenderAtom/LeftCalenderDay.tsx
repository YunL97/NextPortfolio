import { forwardRef } from "react"
import { formatTime } from "../../RightTime/RightTime"

interface LeftCalenderDayProps {
  day: Date
  todoCount: String
  complatedCount: String
  studyTime?: number
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
          {props.day.getDate()} {props.complatedCount} / {props.todoCount}
          <span className="mx-4">{formatTime(props.studyTime ?? 0)}</span>
        </div>
      </button>
    )
  }
)

export default LeftCalenderDay
