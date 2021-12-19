//action creator

import {
  ADD_COUNTER,
  REDUCE_COUNTER,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  MULTIPLY,
  DIVIDE
} from "./actionType";

//its a
const addCounter = (payload) => {
  return {
    type: ADD_COUNTER,
    payload
  };
};
const reduceCounter = (payload) => {
  return {
    type: REDUCE_COUNTER,
    payload
  };
};
const incrementCount = (payload) => {
  return {
    type: INCREMENT_COUNT,
    payload
  };
};
const decrementCount = (payload) => {
  return {
    type: DECREMENT_COUNT,
    payload
  };
};

const multiply = (payload) => {
  return {
    type: MULTIPLY,
    payload
  };
};

const divide = (payload) => {
  return {
    type: DIVIDE,
    payload
  };
};
export {
  addCounter,
  reduceCounter,
  incrementCount,
  decrementCount,
  multiply,
  divide
};
