import Chart from "@/app/components/podo/Chart/Chart"
import LeftCalender from "@/app/components/podo/LeftCalender/LeftCalender"
import LeftCalenderDay from "@/app/components/podo/LeftCalender/LeftCalenderAtom/LeftCalenderDay"
import MiddleTodo from "@/app/components/podo/MiddleTodo/MiddleTodo"
import RightTime from "@/app/components/podo/RightTime/RightTime"
import { useBearStore } from "@/app/store/count"
import useStore from "@/app/store/hydration"

export default function podoComponent() {
  return (
    <>
      {/* <button onClick={bears?.increaseBears}>Increase Bears</button> */}
      {/* <div>{bears?.bears}</div> */}
      <div className="md:h-screen">
        <div className="md:h-2/3 flex flex-col md:flex-row ">
          <div className="h-screen md:h-full md:w-1/3">
            <LeftCalender />
          </div>
          <div className=" md:h-full md:w-1/3">
            <MiddleTodo />
          </div>
          <div className=" md:h-full md:w-1/3">
            <RightTime />
          </div>
        </div>
        <div className="md:h-1/3 pr-16">
          <Chart />
        </div>
      </div>
    </>
  )
}
