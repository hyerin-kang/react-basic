import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      //set : 상태 변경 함수
      //객체를 반환하는 함수 (객체반환을 명확하게 해주기)
      theme: "light",
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => {
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        }));
      },
    }),
    {
      //persist의 두번째인자 (스토리지에 저장)
      name: "theme-storate",
    }
  )
);

//괄호많아서 헷갈리니까 주의하기....
