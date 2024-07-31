import { create } from "zustand"
import { persist } from "zustand/middleware"
import { dayTodo } from "../components/podo/MiddleTodo/MiddleTodo"

//캘린더 현재 날짜
interface LoginState {
  login: boolean
  myMail: string
  data: dayTodo[]
  setLogin: (login: boolean) => void
  setMyMail: (mail: string) => void
  setData: (data: dayTodo[]) => void
}

export const useLoginStore = create<LoginState>()(
  persist(
    set => ({
      login: false,
      myMail: "",
      data: [],
      setLogin: login => set({ login }),
      setMyMail: myMail => set({ myMail }),
      setData: data => set({ data })
    }),
    {
      name: "Login-store"
    }
  )
)
