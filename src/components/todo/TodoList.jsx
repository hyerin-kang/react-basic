import TodoItem from "./TodoItem";
import { useTodoQuery } from "../../hooks/useTodoQuery";
import { useFilterParams } from "../../hooks/useFilterParams";

const TodoList = () => {
  const selectedFilter = useFilterParams();
  const { data: todos = [] } = useTodoQuery(selectedFilter);

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Tasks</h2>

      <ul className="flex flex-col gap-4">
        {todos.map(({ id, text, completed }) => (
          <TodoItem key={id} completed={completed} text={text} id={id} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
