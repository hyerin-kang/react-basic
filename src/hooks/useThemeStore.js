import { create } from "zustand";

export const useThemeStore = create((set) => ({
  //set : 상태 변경 함수
  //객체를 반환하는 함수 (객체반환을 명확하게 해주기)
  theme: "light",
  setTheme: (theme) => set({ theme }),
  toggleTheme: () => {
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    }));
  },
}));
