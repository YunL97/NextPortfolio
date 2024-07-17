"use client"
import { useDayStore } from "@/app/_store/nowday"
import { useEffect, useRef, useState } from "react"
import { dayTodo } from "../MiddleTodo/MiddleTodo"

const RightTime = () => {
  const { day, month, year, reRender, setReRender, setStudyTime } =
    useDayStore()
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const today = new Date().getDate().toString()
  useEffect(() => {
    return () => {
      // 리턴하면 언마운트될 때 실행되는 함수
      // 컴포넌트가 언마운트될 때 타이머를 정리
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])
  //현재 날짜 공부시간 가져오기
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos1002")
    if (savedTodos) {
      const parsedTodos: dayTodo[] = JSON.parse(savedTodos)
      console.log(
        `${new Date().getFullYear().toString()}-${(
          new Date().getMonth() + 1
        ).toString()}-${new Date().getDate().toString()}`
      )
      const currentDayTodos = parsedTodos.find(
        item =>
          item.day ===
          `${new Date().getFullYear().toString()}-${(
            new Date().getMonth() + 1
          ).toString()}-${new Date().getDate().toString()}`
      )
      console.log(currentDayTodos)
      if (currentDayTodos?.studyTime) {
        setSeconds(currentDayTodos.studyTime)
      }
    }
  }, [])

  // 시작 멈춤했을 때 locolstorage에 저장
  useEffect(() => {
    setReRender(!reRender)
    setStudyTime(seconds)
    const savedTodos = localStorage.getItem("todos1002")
    if (savedTodos) {
      const parsedTodos: dayTodo[] = JSON.parse(savedTodos)
      console.log(parsedTodos)
      const existingIndex = parsedTodos.findIndex(
        item =>
          item.day ===
          `${new Date().getFullYear().toString()}-${(
            new Date().getMonth() + 1
          ).toString()}-${new Date().getDate().toString()}`
      )
      console.log(parsedTodos[existingIndex])
      parsedTodos[existingIndex].studyTime = seconds

      localStorage.setItem("todos1002", JSON.stringify(parsedTodos))
    }
  }, [isRunning, seconds])

  const handleButtonClick = () => {
    if (isRunning) {
      // 타이머를 멈춤
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    } else {
      // 타이머를 시작
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1)
      }, 1000)
    }
    setIsRunning(!isRunning)
  }

  return (
    <div className="bg-gray-100 h-full w-full items-center justify-center flex">
      <div className="text-center">
        <h1>{formatTime(seconds)}</h1>
        <div className={`${today !== day ? "hidden" : ""}`}>
          <button
            className={`mt-4 px-4 py-2 rounded text-white ${
              isRunning ? "bg-gray-500" : "bg-blue-500"
            }`}
            onClick={today === day ? handleButtonClick : undefined}
          >
            {isRunning ? "멈춤" : "시작"}
          </button>
        </div>
      </div>
    </div>
  )
}

//시간 변환 함수
export const formatTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return `${hours}시간 ${minutes}분 ${seconds}초`
}
export default RightTime
