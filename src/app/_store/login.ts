import { create } from "zustand"
import { persist } from "zustand/middleware"

//캘린더 현재 날짜
interface LoginState {
  login: boolean
  myMail: string
  setLogin: (login: boolean) => void
  setMyMail: (mail: string) => void
}

export const useLoginStore = create<LoginState>()(
  persist(
    set => ({
      login: false,
      myMail: "",
      setLogin: login => set({ login }),
      setMyMail: myMail => set({ myMail })
    }),
    {
      name: "Login-store"
    }
  )
)
