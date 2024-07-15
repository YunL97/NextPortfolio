"use client"

import { useState, useEffect, useRef } from "react"
import LeftCalenderDay from "./LeftCalenderAtom/LeftCalenderDay"
import LeftCalenderButton from "./LeftCalenderAtom/LeftCalenderButton"
import { useDayStore } from "@/app/_store/nowday"

interface Dat {
  year: number
  month: number
}

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
  const { day, month, year, setDay, setMonth, setYear } = useDayStore()

  const [currentDate, setCurrentDate] = useState(new Date())
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth())
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const dat: Dat = { year: currentYear, month: currentMonth }
  const days = generateDaysInMonth(dat)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const todayRef = useRef<HTMLDivElement | null>(null)
  console.log(currentDate.getDate())
  useEffect(() => {
    if (todayRef.current) {
      todayRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
      setDay(currentDate.getDate().toString())
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

  const handleDateClick = (currentDay: Date) => {
    setSelectedDate(currentDay)
    // console.log(day.getDate(), currentMonth, currentYear)
    setDay(currentDay.getDate().toString())
    setMonth(currentMonth.toString())
    setYear(currentYear.toString())
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
          {days.map((day, index) => (
            <LeftCalenderDay
              key={index}
              day={day}
              selectedDate={selectedDate}
              currentDate={currentDate}
              onClick={handleDateClick}
              ref={
                day.toDateString() === currentDate.toDateString()
                  ? todayRef
                  : null
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calendar
