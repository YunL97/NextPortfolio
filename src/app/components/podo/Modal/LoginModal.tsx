import React, { useState } from "react"
import LoginForm from "./Form/LoginForm"
import SignupForm from "./Form/SignupFrom"

interface LoginModalProps {
  showModal: boolean
  setShowModal: (value: boolean) => void
}

export interface FormProps {
  setIsLogin: (value: boolean) => void
  setShowModal: (value: boolean) => void
}

const LoginModal = ({ showModal, setShowModal }: LoginModalProps) => {
  const [isLogin, setIsLogin] = useState(true) // 로그인/회원가입 폼 전환 상태

  if (!showModal) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black opacity-50 absolute inset-0"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-96">
        <h2 className="text-2xl mb-4">{isLogin ? "로그인" : "회원가입"}</h2>
        {isLogin ? (
          <LoginForm setIsLogin={setIsLogin} setShowModal={setShowModal} />
        ) : (
          <SignupForm setIsLogin={setIsLogin} setShowModal={setShowModal} />
        )}
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => setShowModal(false)}
        >
          닫기
        </button>
      </div>
    </div>
  )
}

export default LoginModal
