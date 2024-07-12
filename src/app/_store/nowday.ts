// store.ts
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface DayState {
  day: String
  month: String
  year: String
  setDay: (day: String) => void
  setMonth: (month: string) => void
  setYear: (year: string) => void
}

export const useDayStore = create<DayState>()(
  persist(
    set => ({
      day: "",
      month: "",
      year: "",
      setDay: day => set({ day }),
      setMonth: month => set({ month }),
      setYear: year => set({ year })
    }),
    {
      name: "Day-store" // default to LocalStorage
    }
  )
)
