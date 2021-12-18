import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/action";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useSelector((state) => {
    return {
      todos: state.todos
    };
  });
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const action = removeTodo(id);
    dispatch(action);
  };

  const handleToggle = (id) => {
    const action = toggleTodo(id);
    dispatch(action);
  };

  return (
    <div>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;
