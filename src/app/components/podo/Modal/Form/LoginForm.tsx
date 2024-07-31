"use client"
import { useState } from "react"
import { FormProps } from "../LoginModal"
import axios from "axios"
import { useLoginStore } from "@/app/_store/login"
import api from "@/app/hooks/intercepter"

const LoginForm = ({ setIsLogin, setShowModal }: FormProps) => {
  const { setLogin, setMyMail } = useLoginStore()
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [failLogin, setFailLogin] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await api.post("/login", {
        mail,
        password
      })
      if (response.data.message === "0") {
        console.log("로그인 완료")
        localStorage.setItem("accessToken", response.data.token)
        localStorage.setItem("refreshToken", response.data.refreshToken)
        console.log(response.data.user)
        setMyMail(response.data.mail)
        setLogin(true)
        setShowModal(false)
      } else {
        console.log("로그인 실패")
        setFailLogin(true)
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios에서 발생한 오류인 경우
        console.error("Error message:", error.message)

        if (error.response) {
          // 서버가 응답을 반환한 경우
          console.error("Status code:", error.response.status)
          console.error("Response data:", error.response.data.message)
          if (error.response.data.message === "1") {
            setFailLogin(true)
          }
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
      {failLogin && <p className="text-red-500">로그인 실패</p>}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        로그인
      </button>
      <p className="text-center text-sm text-gray-600">
        계정이 없으신가요?{" "}
        <button
          type="button"
          onClick={() => setIsLogin(false)}
          className="text-blue-500 hover:underline"
        >
          회원가입
        </button>
      </p>
    </form>
  )
}

export default LoginForm
