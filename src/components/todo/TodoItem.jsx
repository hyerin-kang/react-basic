import { Link, useNavigate } from "react-router";
import {
  useDeleteTodoMutation,
  useToggleTodoMutation,
} from "../../hooks/useTodoQuery";

const TodoItem = ({ completed, text, id }) => {
  const navigate = useNavigate();
  const { mutate: toggleTodoMute } = useToggleTodoMutation();
  const { mutate: deleteTodoMutate } = useDeleteTodoMutation();

  const navigateAfterDelete = (id) => {
    deleteTodoMutate(id);

    navigate("/");
  };

  return (
    <li className="flex flex-row bg-white p-5 rounded-2xl shadow-md justify-between items-center flex-wrap gap-4">
      <Link
        to={`/todos/${id}`}
        className={` hover:underline ${completed ? "line-through" : " "} `}
      >
        {text}
      </Link>

      <div className="flex flex-row flex-wrap gap-2">
        <button
          className={`${
            completed ? "bg-[#242424]" : "bg-[#582be6]"
          } text-white border-none px-4 py-2 rounded-lg cursor-pointer break-keep text-center  hover:opacity-80`}
          onClick={() => {
            toggleTodoMute({ id, completed });
          }}
        >
          {completed ? "취소하기" : "완료하기"}
        </button>

        <button
          onClick={() => navigateAfterDelete(id)}
          className="bg-[#ff4033] text-white border-none px-4 py2 rounded-lg cursor-pointer break-keep text-center hover:opacity-80"
        >
          삭제하기
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
