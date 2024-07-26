"use client"

import { useState } from "react"
import { FormProps } from "../LoginModal"
import axios from "axios"
import { useLoginStore } from "@/app/_store/login"

const SignupForm = ({ setIsLogin, setShowModal }: FormProps) => {
  const { setLogin, setMyMail } = useLoginStore()
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post("https://yunl97.store/signup", {
        mail,
        password,
        confirmPassword
      })
      if (response.data.message === "0") {
        console.log("회원가입 완료")
        setMyMail(response.data.mail)
        setLogin(true)
        setShowModal(false)
      } else {
        console.log("회원가입 실패")
      }
      // 응답 데이터 처리
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios에서 발생한 오류인 경우
        console.error("Error message:", error.message)

        if (error.response) {
          // 서버가 응답을 반환한 경우
          console.error("Status code:", error.response.status)
          console.error("Response data:", error.response.data.message)
        } else if (error.request) {
          // 요청이 서버에 도달하지 못한 경우
          console.error("Request data:", error.request)
        } else {
          // 설정 중 오류가 발생한 경우
          console.error("Error configuration:", error.config)
        }
      } else {
        // Axios 외의 오류인 경우
        console.error("Unexpected error:", error)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          이메일
        </label>
        <input
          type="email"
          id="email"
          value={mail}
          onChange={e => setMail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          비밀번호
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
          비밀번호 확인
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        회원가입
      </button>
      <p className="text-center text-sm text-gray-600">
        이미 계정이 있으신가요?{" "}
        <button
          type="button"
          onClick={() => setIsLogin(true)}
          className="text-blue-500 hover:underline"
        >
          로그인
        </button>
      </p>
    </form>
  )
}

export default SignupForm
