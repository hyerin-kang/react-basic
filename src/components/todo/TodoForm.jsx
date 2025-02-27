import { useEffect, useRef, useState } from "react";
import { useAddTodoMutation } from "../../hooks/useTodoQuery";

const TodoForm = () => {
  const { mutate: addTodoMutate } = useAddTodoMutation();
  const [todoText, setTodoText] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoText.trim()) {
      return;
    }

    addTodoMutate(todoText);

    setTodoText("");
  };

  const handleChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="flex flex-row flex-wrap gap-2">
      <input
        type="text"
        value={todoText}
        onChange={handleChangeTodoText}
        placeholder="할 일을 입력하세요"
        ref={inputRef}
        className="p-2 text-base rounded-lg bg-white flex-[8] placeholder-gray-400  focus:border-[#582be6] "
      />
      <button
        type="submit"
        className="flex-1 text-center px-4 py-2 text-white rounded-lg bg-[#582be6] hover:bg-[#4422b5]"
      >
        제출하기
      </button>
    </form>
  );
};

export default TodoForm;
