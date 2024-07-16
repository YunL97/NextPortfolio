// store.ts
import { create } from "zustand"
import { persist } from "zustand/middleware"

//캘린더 현재 날짜
interface DayState {
  day: string
  month: string
  year: string
  reRender: boolean
  studyTime: number
  setDay: (day: string) => void
  setMonth: (month: string) => void
  setYear: (year: string) => void
  setReRender: (reRender: boolean) => void
  setStudyTime: (studyTime: number) => void
}

export const useDayStore = create<DayState>()(
  persist(
    set => ({
      day: "",
      month: "",
      year: "",
      reRender: false,
      studyTime: 0,
      setDay: day => set({ day }),
      setMonth: month => set({ month }),
      setYear: year => set({ year }),
      setReRender: reRender => set({ reRender }),
      setStudyTime: studyTime => set({ studyTime })
    }),
    {
      name: "Day-store"
    }
  )
)
