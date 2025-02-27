import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import TodoDetailPage from "./pages/TodoDetailPage";
import QueryProvider from "./components/provider/QueryProvider";
import { useThemeStore } from "./hooks/useThemeStore";
import { useEffect } from "react";

const App = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("dark", "light");
    root.classList.add(theme);
    console.log("Theme changed to:", theme);
  }, [theme]);
  return (
    <BrowserRouter>
      <QueryProvider>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="todos/:id" element={<TodoDetailPage />} />
          </Route>
        </Routes>
      </QueryProvider>
    </BrowserRouter>
  );
};

export default App;
