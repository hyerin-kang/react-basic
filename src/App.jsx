import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import TodoDetailPage from "./pages/TodoDetailPage";
import QueryProvider from "./components/provider/QueryProvider";

const App = () => {
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
