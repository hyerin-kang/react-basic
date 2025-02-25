import axios from "axios";

export const todoClient = axios.create({
  //create 메서드를 사용해 todoClient라는 새로운 Axios 인스턴스를 생성
  baseURL: "http://localhost:5000",
});

//필터가 무엇인지에 따라 다르게
/*
1. URLSearchParams를 통해 페이지 url을찾는다
2. 필터를 받는다. 필터는 컴플리티드이냐 펜딩이냐 를 반환한다.
3. append : 추가하다 ('컴플리티드 키를 가진' ,true인 값을 가진애를)

URLSearchParams 를 문자열로 바꿔주어야한다. .toString()
?쿼리스트링값
 */

export const getTodos = async (filter) => {
  //1. params찾기
  const searchParams = new URLSearchParams();
  if (filter === "completed") {
    searchParams.append("completed", true);
  }
  if (filter === "pending") {
    searchParams.append("completed", false);
  }

  //get : 데이터 가져오기
  // const { data } = await todoClient.get("/todos");
  const { data } = await todoClient.get(`/todos?${searchParams.toString()}`);
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
