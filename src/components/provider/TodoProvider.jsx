import { useEffect, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
// import { SAMPLE_TODOS } from "../../constants/sample-todos.js";
import { todoClient } from "../../lib/todoClient.js";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    //get : 데이터 가져오기
    const { data } = await todoClient.get("/");
    setTodos(data);
  };

  //상세페이지만들기
  const getTodoItem = async (id) => {
    const { data } = await todoClient.get(`${id}`);
    return data;
  };
  const addTodos = async (text) => {
    const { data } = await todoClient.post("/", {
      text: text,
      completed: false,
    });
    //다시 목록 불러와준다.
    await getTodos();
    return data;
  };

  const toggleTodoCompleted = async (id, currentCompleted) => {
    const { data } = await todoClient.patch(`${id}`, {
      completed: !currentCompleted,
    });
    await getTodos();
    return data;
  };

  const deleteTodo = async (id) => {
    // todo.id가 내가 찾는 id와 같지 않을 때 true를 반환하여 그대로 남겨둠
    const { data } = await todoClient.delete(`${id}`);
    await getTodos();
    return data;
  };

  const getFilteredTodos = (selectedFilter) => {
    if (selectedFilter === "completed") {
      return todos.filter((todo) => todo.completed);
    }

    if (selectedFilter === "pending") {
      return todos.filter((todo) => !todo.completed);
    }

    return todos;
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        getTodoItem,
        addTodos,
        toggleTodoCompleted,
        deleteTodo,
        getFilteredTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
