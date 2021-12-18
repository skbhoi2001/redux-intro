import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionType";

const initState = {
  todos: [
    {
      id: 1,
      status: true,
      title: "buy bread"
    }
  ]
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action?.payload?.id)
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: !item.status }
            : item
        )
      };

    default:
      return state;
  }
}

export { reducer };
