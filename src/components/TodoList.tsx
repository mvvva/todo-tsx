import { useTodo } from "../store/context";
import TodoItem from "./TodoItem";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const { state } = useTodo();
  const todos: Todo[] = state.todos;

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
