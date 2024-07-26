"use client"
import { useState } from "react"
import { FormProps } from "../LoginModal"
import axios from "axios"

const LoginForm = ({ setIsLogin }: FormProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post("https://yunl97.store/login", {
        email,
        password
      })
      console.log(response.data)
      // 응답 데이터 처리
    } catch (error) {
      console.error(error)
      // 오류 처리
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
          value={email}
          onChange={e => setEmail(e.target.value)}
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
