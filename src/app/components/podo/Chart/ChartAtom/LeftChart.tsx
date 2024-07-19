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

const data: dayTodo[] = []

interface LeftChartProps {
  selectDay: number
}
const LeftChart = (props: LeftChartProps) => {
  const { studyTime } = useDayStore()
  const [selectDay, setSelectDay] = useState(props.selectDay)
  const [data, setData] = useState<dayTodo[]>([])

  useEffect(() => {
    console.log("asdf")
    const savedTodos = localStorage.getItem("todos1002")
    if (savedTodos) {
      const parsedTodos: dayTodo[] = JSON.parse(savedTodos)
      const today = new Date()
      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(today.getDate() - props.selectDay)

      // 최근 30일 데이터 필터링
      const filteredTodos = parsedTodos.filter(todo => {
        const todoDate = new Date(todo.day)
        return todoDate >= thirtyDaysAgo && todoDate <= today
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
        <YAxis />
        <Tooltip />
        <Legend />
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
