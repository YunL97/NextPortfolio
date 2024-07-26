import { create } from "zustand"
import { persist } from "zustand/middleware"

//캘린더 현재 날짜
interface LoginState {
  login: boolean
  setLogin: (login: boolean) => void
}

export const useLoginStore = create<LoginState>()(
  persist(
    set => ({
      login: false,
      setLogin: login => set({ login })
    }),
    {
      name: "Login-store"
    }
  )
)
