// store.ts
import { create } from "zustand"
import { persist } from "zustand/middleware"

//캘린더 현재 날짜
interface DayState {
  day: string
  month: string
  year: string
  reRender: boolean
  setDay: (day: string) => void
  setMonth: (month: string) => void
  setYear: (year: string) => void
  setReRender: (reRender: boolean) => void
}

export const useDayStore = create<DayState>()(
  persist(
    set => ({
      day: "",
      month: "",
      year: "",
      reRender: false,
      setDay: day => set({ day }),
      setMonth: month => set({ month }),
      setYear: year => set({ year }),
      setReRender: reRender => set({ reRender })
    }),
    {
      name: "Day-store"
    }
  )
)
