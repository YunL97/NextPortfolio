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
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 비밀번호와 비밀번호 확인 비교
    if (password !== confirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.")
      return
    }

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
        setErrorMessage("회원가입 실패: " + response.data.message)
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error message:", error.message)

        if (error.response) {
          console.error("Status code:", error.response.status)
          console.error("Response data:", error.response.data.message)
          setErrorMessage("회원가입 실패: " + error.response.data.message)
        } else if (error.request) {
          console.error("Request data:", error.request)
          setErrorMessage("서버에 도달할 수 없습니다.")
        } else {
          console.error("Error configuration:", error.config)
          setErrorMessage("설정 오류 발생.")
        }
      } else {
        console.error("Unexpected error:", error)
        setErrorMessage("예기치 않은 오류가 발생했습니다.")
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
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
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
