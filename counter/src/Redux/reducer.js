import { ADD_COUNTER, REDUCE_COUNTER } from "./actionType";

const initialState = {
  counter: 1
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + payload
      };
    case REDUCE_COUNTER:
      return {
        ...state,
        counter: state.counter - payload
      };
    default:
      return state;
  }
};

export { reducer };

//return statement of the reducer
//is the new updated value of the store

//its important to spread the state because the redux
//will check the object refference
