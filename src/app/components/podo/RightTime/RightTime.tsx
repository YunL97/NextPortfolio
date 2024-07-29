"use client"
import { useDayStore } from "@/app/_store/nowday"
import { useEffect, useRef, useState } from "react"
import { dayTodo } from "../MiddleTodo/MiddleTodo"
import LoginModal from "../Modal/LoginModal"
import { formatMinutesAndSeconds } from "../Chart/ChartAtom/LeftChart"
import { useLoginStore } from "@/app/_store/login"
import axios from "axios"

const RightTime = () => {
  const { day, month, year, reRender, setReRender, setStudyTime } =
    useDayStore()
  const { login, myMail, setLogin, setMyMail } = useLoginStore()
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const today = new Date().getDate().toString()
  const [showModal, setShowModal] = useState(false)

  const handleLoginClick = () => {
    setShowModal(true)
    fetch("/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: localStorage.getItem("refreshToken") })
    }).then(() => {
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
    })
  }
  const handleLogoutClick = () => {
    setLogin(false)
    setMyMail("")
  }

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
    document.title = `${formatMinutesAndSeconds(seconds)}`
    setReRender(!reRender)
    setStudyTime(seconds)
    let dayTodo: dayTodo = {
      day: `${year}-${month}-${day}`,
      todo: [],
      studyTime: seconds
    }
    if (year == "" || month == "") return
    const savedTodos = localStorage.getItem("todos1002")
    if (savedTodos) {
      const parsedTodos: dayTodo[] = JSON.parse(savedTodos)
      const existingIndex = parsedTodos.findIndex(
        item =>
          item.day ===
          `${new Date().getFullYear().toString()}-${(
            new Date().getMonth() + 1
          ).toString()}-${new Date().getDate().toString()}`
      )
      if (parsedTodos[existingIndex]?.studyTime != null)
        parsedTodos[existingIndex].studyTime = seconds

      localStorage.setItem("todos1002", JSON.stringify(parsedTodos))
    } else {
      localStorage.setItem("todos1002", JSON.stringify([dayTodo]))
    }
  }, [isRunning, seconds])

  const handleButtonClick = async () => {
    const response = await axios.get("https://yunl97.store/users")
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
    <div className="bg-gray-100 h-full w-full ">
      <LoginModal showModal={showModal} setShowModal={setShowModal} />
      <div className="flex w-full justify-end pr-3">
        <button
          onClick={login ? handleLogoutClick : handleLoginClick}
          className={`mt-4 px-4 py-2 rounded text-white bg-blue-500`}
        >
          {login ? "로그아웃" : "로그인/회원가입"}
        </button>
      </div>
      <div className="flex items-center justify-center  h-full w-full ">
        <div className="text-center">
          <h1>{formatTime(seconds)}</h1>
          <button
            className={`mt-4 px-4 py-2 rounded text-white ${
              isRunning ? "bg-gray-500" : "bg-blue-500"
            }`}
            onClick={handleButtonClick}
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
