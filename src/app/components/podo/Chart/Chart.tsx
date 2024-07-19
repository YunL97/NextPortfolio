"use client"

import React, { PureComponent, useEffect, useState } from "react"

import LeftChart from "./ChartAtom/LeftChart"
import ChartRightButton from "./ChartAtom/ChartRightButton"

const Chart = () => {
  const [selectdDay, setSelectdDay] = useState(7)

  const clickButton = (day: number) => {
    setSelectdDay(day)
  }
  return (
    <div className="flex w-full h-full items-center justify-center p-4">
      <LeftChart selectDay={selectdDay} />
      <div className="flex flex-col space-y-4">
        <ChartRightButton buttonName={7} clickButton={clickButton} />
        <ChartRightButton buttonName={30} clickButton={clickButton} />
        <ChartRightButton buttonName={365} clickButton={clickButton} />
      </div>
    </div>
  )
}

export default Chart
