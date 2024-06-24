"use client"

import { useBearStore } from "@/app/store/count"
import useStore from "@/app/store/hydration"

export default function TestComponent() {
  const bears = useStore(useBearStore, state => state)
  {
    bears ? { bears } : undefined
  }
  console.log("test" + process.env.BASE_URL)
  console.log(process.env.NEXT_PUBLIC_NODE_ENV)
  console.log("sssdsd")
  return (
    <>
      <button onClick={bears?.increaseBears}>Increase Bears</button>
      <div>{bears?.bears}</div>
    </>
  )
}
