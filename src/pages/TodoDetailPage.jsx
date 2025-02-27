import { Link, useParams } from "react-router";
import TodoItem from "../components/todo/TodoItem";
import { useQuery } from "@tanstack/react-query";
import { getTodoItem } from "../api/todo-api";

const TodoDetailPage = () => {
  // const [targetTodoItem, setTargetTodoItem] = useState(null);

  const { id } = useParams();
  const {
    data: todoItem,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoItem(id),
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching todos - {error}</div>;
  }
  return (
    <section className="flex flex-col gap-4">
      {todoItem ? (
        <TodoItem
          id={todoItem.id}
          text={todoItem.text}
          completed={todoItem.completed}
        />
      ) : (
        <p>해당하는 데이터를 찾을 수 없습니다.</p>
      )}

      <Link to="/" className="flex-1">
        <button className="w-full text-center bg-[#242424] text-white py-2 px-4 rounded-lg hover:opacity-80">
          돌아가기
        </button>
      </Link>
    </section>
  );
};

export default TodoDetailPage;
