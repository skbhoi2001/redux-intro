import React from "react";
import { addCounter, reduceCounter } from "../Redux/action";
import { AppContext } from "../Redux/AppContextProvider";
import { store } from "../Redux/store";

const Counter = () => {
  // const [state, setState] = React.useState(0);
  const { dispatch, getState } = React.useContext(AppContext);

  const { counter } = getState();
  // const { counter } = store.getState();
  // const { dispatch } = store;

  // const forceUpdate = () => setState(state + 1);
  const handleAdd = () => {
    dispatch(addCounter(1));
    // setState((prev)=>prev+1) //or
    // forceUpdate();
  };
  const handleReduce = () => {
    dispatch(reduceCounter(1));
    // setState((prev)=>prev-1) //or
    // forceUpdate();
  };
  return (
    <>
      <h1>Counter :{counter}</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReduce}>REDUCE</button>
    </>
  );
};

export { Counter };
