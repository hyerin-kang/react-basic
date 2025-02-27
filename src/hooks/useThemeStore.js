import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "light",
  setTeme: (theme) => set({ theme }),
}));
