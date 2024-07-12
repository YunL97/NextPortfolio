import LeftCalender from "@/app/components/podo/LeftCalender/LeftCalender"
import LeftCalenderDay from "@/app/components/podo/LeftCalender/LeftCalenderAtom/LeftCalenderDay"
import MiddleTodo from "@/app/components/podo/MiddleTodo/MiddleTodo"
import { useBearStore } from "@/app/store/count"
import useStore from "@/app/store/hydration"

export default function TestComponent() {
  // const bears = useStore(useBearStore, state => state)
  // {
  //   bears ? { bears } : undefined
  // }
  // console.log("test" + process.env.BASE_URL)
  // console.log(process.env.NEXT_PUBLIC_NODE_ENV)
  // console.log("sssdsd")
  return (
    <>
      {/* <button onClick={bears?.increaseBears}>Increase Bears</button> */}
      {/* <div>{bears?.bears}</div> */}
      <div className="h-screen">
        <div className="h-2/3 flex">
          <div className="w-1/3">
            <LeftCalender />
          </div>
          <div className="w-1/3">
            <MiddleTodo />
          </div>
          <div className="w-1/3">{/* <LeftCalender /> */}</div>
        </div>
        <div className="h-1/3">{/* <LeftCalender /> */}</div>
      </div>
    </>
  )
}
