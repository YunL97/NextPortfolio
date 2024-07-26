"use client"
import React, { PureComponent, useEffect, useState } from "react"
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts"
import { dayTodo } from "../../MiddleTodo/MiddleTodo"
import { useDayStore } from "@/app/_store/nowday"
import { formatTime } from "../../RightTime/RightTime"

const data: dayTodo[] = []

interface LeftChartProps {
  selectDay: number
}

export const formatMinutesAndSeconds = (value: number) => {
  const minutes = Math.floor(value / 60)
  const seconds = value % 60
  return `${minutes}분 ${seconds}초`
}

const customizedGroupTick = (props: any) => {
  const { index, x, y, payload } = props
  console.log(x, y, payload.value)
  return (
    <g>
      <g>
        <text x={x} y={y} className="text-xs " textAnchor="end" fill="#666">
          {formatMinutesAndSeconds(payload.value)}
        </text>
      </g>
    </g>
  )
}

const LeftChart = (props: LeftChartProps) => {
  const { studyTime } = useDayStore()
  // const [selectDay, setSelectDay] = useState(props.selectDay)
  const [data, setData] = useState<dayTodo[]>([])

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos1002")
    if (savedTodos) {
      const parsedTodos: dayTodo[] = JSON.parse(savedTodos)
      const today = new Date()
      const DaysAgo = new Date()
      DaysAgo.setDate(today.getDate() - props.selectDay)

      // 선택날짜 기간별 데이터 필터
      const filteredTodos = parsedTodos.filter(todo => {
        const todoDate = new Date(todo.day)
        return todoDate >= DaysAgo && todoDate <= today && todo.studyTime !== 0
      })

      // 중복 제거
      const uniqueTodos = filteredTodos.filter(
        (todo, index, self) => index === self.findIndex(t => t.day === todo.day)
      )

      setData(uniqueTodos)
    }
  }, [studyTime, props.selectDay])
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis tickFormatter={formatTime} tick={customizedGroupTick} />
        <Tooltip
          cursor={false}
          formatter={value => formatMinutesAndSeconds(value as number)}
        />
        <Bar
          dataKey="studyTime"
          fill="#8884d8"
          barSize={20}
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default LeftChart
