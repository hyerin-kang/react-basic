import axios from "axios";

export const todoClient = axios.create({
  //create 메서드를 사용해 todoClient라는 새로운 Axios 인스턴스를 생성
  baseURL: "http://localhost:3000",
});
export const getTodos = async () => {
  //get : 데이터 가져오기
  const { data } = await todoClient.get("/todos");
  return data;
};

export const getTodoItem = async (id) => {
  const { data } = await todoClient.get(`/todos/${id}`);
  return data;
};

export const addTodos = async (text) => {
  const { data } = await todoClient.post("/todos", {
    text: text,
    completed: false,
  });

  return data;
};

export const toggleTodoCompleted = async (id, currentCompleted) => {
  const { data } = await todoClient.patch(`/todos/${id}`, {
    completed: !currentCompleted,
  });

  return data;
};

export const deleteTodo = async (id) => {
  // todo.id가 내가 찾는 id와 같지 않을 때 true를 반환하여 그대로 남겨둠
  const { data } = await todoClient.delete(`/todos/${id}`);

  return data;
};
