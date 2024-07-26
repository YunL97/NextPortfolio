import React from "react"

interface LoginModalProps {
  showModal: boolean
  setShowModal: (value: boolean) => void
}

const LoginModal = (props: LoginModalProps) => {
  if (!props.showModal) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black opacity-50 absolute inset-0"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10">
        <h2 className="text-2xl mb-4">로그인</h2>
        <p>로그인 화면 내용이 여기에 들어갑니다.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => props.setShowModal(false)}
        >
          닫기
        </button>
      </div>
    </div>
  )
}

export default LoginModal
