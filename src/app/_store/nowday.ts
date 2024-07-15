// store.ts
import { create } from "zustand"
import { persist } from "zustand/middleware"

//캘린더 현재 날짜
interface DayState {
  day: string
  month: string
  year: string
  todayTodo: number
  complatedTodo: number
  setDay: (day: string) => void
  setMonth: (month: string) => void
  setYear: (year: string) => void
  setTodayTodo: (todayTodo: number) => void
  setComplatedTodo: (complatedTodo: number) => void
}

export const useDayStore = create<DayState>()(
  persist(
    set => ({
      day: "",
      month: "",
      year: "",
      todayTodo: 0,
      complatedTodo: 0,
      setDay: day => set({ day }),
      setMonth: month => set({ month }),
      setYear: year => set({ year }),
      setTodayTodo: todayTodo => set({ todayTodo }),
      setComplatedTodo: complatedTodo => set({ complatedTodo })
    }),
    {
      name: "Day-store"
    }
  )
)
