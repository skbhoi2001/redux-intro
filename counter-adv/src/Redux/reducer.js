import {
  ADD_COUNTER,
  REDUCE_COUNTER,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  MULTIPLY,
  DIVIDE
} from "./actionType";

const initialState = {
  counter: 1
};
const malCount = {
  defaultCount: 0
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
const secondReducer = (state = malCount, { type, payload }) => {
  switch (type) {
    case INCREMENT_COUNT: {
      return {
        ...state,
        defaultCount: state.defaultCount + payload
      };
    }
    case DECREMENT_COUNT: {
      return {
        ...state,
        defaultCount: state.defaultCount - payload
      };
    }
    case MULTIPLY: {
      return {
        ...state,
        defaultCount: state.defaultCount * payload
      };
    }
    case DIVIDE: {
      return {
        ...state,
        defaultCount: Math.floor(state.defaultCount / payload)
      };
    }
    default:
      return state;
  }
};
export { reducer, secondReducer };

//return statement of the reducer
//is the new updated value of the store

//its important to spread the state because the redux
//will check the object refference
