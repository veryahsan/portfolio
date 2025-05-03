import { create } from 'zustand'

interface StoreState {
  isDarkMode: boolean
  toggleTheme: () => void
  currentSection: string
  setCurrentSection: (section: string) => void
}

export const useStore = create<StoreState>((set) => ({
  isDarkMode: true,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  currentSection: 'home',
  setCurrentSection: (section) => set({ currentSection: section }),
}))
