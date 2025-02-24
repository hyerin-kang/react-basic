import axios from "axios";

export const todoClient = axios.create({
  //create 메서드를 사용해 todoClient라는 새로운 Axios 인스턴스를 생성
  baseURL: "http://localhost:3000/todos",
});
