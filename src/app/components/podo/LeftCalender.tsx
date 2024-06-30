"use client"

import { useState, useEffect, useRef } from "react"

const generateDaysInMonth = (year: number, month: number) => {
  const date = new Date(year, month, 1)
  const days = []
  while (date.getMonth() === month) {
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
  const [currentDate, setCurrentDate] = useState(new Date())
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth())
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())
  const days = generateDaysInMonth(currentYear, currentMonth)
  const containerRef = useRef(null)
  const todayRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (todayRef.current) {
      todayRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }, [])

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 h-full">
      <h1 className="text-2xl font-bold mb-4">Daily Calendar</h1>
      <div className="flex justify-between items-center w-full mb-4 ">
        <button
          onClick={handlePrevMonth}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Previous Month
        </button>
        <h2 className="text-xl font-bold">
          {monthNames[currentMonth]} {currentYear}
        </h2>
        <button
          onClick={handleNextMonth}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Next Month
        </button>
      </div>
      <div
        className="flex flex-col space-y-2 overflow-y-scroll h-full w-full "
        ref={containerRef}
      >
        {days.map((day, index) => (
          <div
            key={index}
            className={`p-4 w-full rounded h-16 ${
              day.toDateString() === currentDate.toDateString()
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
            ref={
              day.toDateString() === currentDate.toDateString()
                ? todayRef
                : null
            }
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
