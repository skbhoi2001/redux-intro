import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionType";

const addTodo = ({ title, id, status }) => {
  return {
    type: ADD_TODO,
    payload: {
      title,
      status,
      id
    }
  };
};

const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: {
      id: id
    }
  };
};

const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id: id
    }
  };
};

export { addTodo, removeTodo, toggleTodo };
