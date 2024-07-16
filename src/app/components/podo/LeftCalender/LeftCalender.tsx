"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import LeftCalenderDay from "./LeftCalenderAtom/LeftCalenderDay"
import LeftCalenderButton from "./LeftCalenderAtom/LeftCalenderButton"
import { useDayStore } from "@/app/_store/nowday"
import { dayTodo } from "../MiddleTodo/MiddleTodo"

interface Dat {
  year: number
  month: number
}

// 그 달의 날짜 가져오기
const generateDaysInMonth = (dat: Dat) => {
  const date = new Date(dat.year, dat.month, 1)
  const days = []
  while (date.getMonth() === dat.month) {
    days.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }
  return days
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const Calendar = () => {
  const { day, month, year, reRender, setDay, setMonth, setYear } =
    useDayStore()

  const [currentDate, setCurrentDate] = useState(new Date())
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth())
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [todoLocalstorage, setTodoLocalstorage] = useState<dayTodo[] | []>([])
  const dat: Dat = { year: currentYear, month: currentMonth }
  const days = generateDaysInMonth(dat)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const todayRef = useRef<HTMLDivElement | null>(null)
  //오늘 날짜로 스크롤 이동
  useEffect(() => {
    if (todayRef.current) {
      todayRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
      setDay(currentDate.getDate().toString())
    }
  }, [])
  //데이터 가져오기
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos1002")
    if (savedTodos) {
      setTodoLocalstorage(JSON.parse(savedTodos))
    }
    // console.log(day, month, year)
  }, [day, currentMonth, reRender])

  const handlePrevMonth = useCallback(() => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }, [currentMonth])

  const handleNextMonth = useCallback(() => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }, [currentMonth])

  const handleDateClick = useCallback(
    (currentDay: Date) => {
      setSelectedDate(currentDay)
      console.log(
        currentDay.getDate().toString(),
        (currentDay.getMonth() + 1).toString(),
        currentDay.getFullYear().toString()
      )
      setDay(currentDay.getDate().toString())
      setMonth((currentDay.getMonth() + 1).toString())
      setYear(currentDay.getFullYear().toString())
    },
    [currentMonth]
  )

  const getTodoCount = (date: Date) => {
    const formattedDate = `${date.getFullYear().toString()}-${(
      date.getMonth() + 1
    ).toString()}-${date.getDate().toString()}`
    const dayTodo = todoLocalstorage.find(
      todo => todo.day === formattedDate.toString()
    )
    // console.log(dayTodo?.todo.length)
    return dayTodo ? dayTodo.todo.length : 0
  }
  const getComplateCount = (date: Date) => {
    const formattedDate = `${date.getFullYear().toString()}-${(
      date.getMonth() + 1
    ).toString()}-${date.getDate().toString()}`
    const dayTodo = todoLocalstorage.find(
      todo => todo.day === formattedDate.toString()
    )
    // console.log(dayTodo?.todo.length)
    return dayTodo ? dayTodo.todo.filter(todo => todo.completed).length : 0
  }

  const getStudyTime = (date: Date) => {
    const formattedDate = `${date.getFullYear().toString()}-${(
      date.getMonth() + 1
    ).toString()}-${date.getDate().toString()}`
    const dayTodo = todoLocalstorage.find(
      todo => todo.day === formattedDate.toString()
    )
    return dayTodo?.studyTime ? dayTodo.studyTime : 0
  }

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 h-full">
      <h1 className="text-2xl font-bold mb-4">Daily Calendar</h1>
      <div className="flex justify-between items-center w-full mb-4">
        <LeftCalenderButton
          handleMonth={handlePrevMonth}
          monthName={"Previous Month"}
        />
        <h2 className="text-xl font-bold text-center">
          {monthNames[currentMonth]} {currentYear}
        </h2>
        <LeftCalenderButton
          handleMonth={handleNextMonth}
          monthName={"Next Month"}
        />
      </div>
      <div className="overflow-auto h-2/3 md:h-full w-full p-4">
        <div
          className="flex flex-col space-y-2 h-full w-full overflow-auto"
          ref={containerRef}
        >
          {days.map((day, index) => {
            const formattedDate = day.toISOString().split("T")[0]
            // console.log(formattedDate)
            const todoCount = getTodoCount(day)
            const complatedCount = getComplateCount(day)
            const studyTime = getStudyTime(day)
            return (
              <LeftCalenderDay
                key={index}
                day={day}
                todoCount={todoCount.toString()}
                complatedCount={complatedCount.toString()}
                selectedDate={selectedDate}
                studyTime={studyTime}
                currentDate={currentDate}
                onClick={handleDateClick}
                ref={
                  day.toDateString() === currentDate.toDateString()
                    ? todayRef
                    : null
                }
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Calendar
