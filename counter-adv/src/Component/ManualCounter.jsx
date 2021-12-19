import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCount,
  decrementCount,
  multiply,
  divide
} from "../Redux/action.js";

function ManualCounter() {
  const [state, setState] = React.useState("");

  const value = useSelector((state) => state.defaultCount);

  const dispatch = useDispatch();

  function handleChange(e) {
    setState(e.target.value);
  }

  function handleAdd() {
    const payload = Number(state);

    dispatch(incrementCount(payload));
  }

  function handleSub() {
    const payload = Number(state);

    dispatch(decrementCount(payload));
  }
  function handleMul() {
    const payload = Number(state);

    dispatch(multiply(payload));
  }
  function handleDiv() {
    const payload = Number(state);

    dispatch(divide(payload));
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <span>Enter value</span>
      <input
        value={state}
        onChange={(e) => handleChange(e)}
        type="number"
        name=""
        id=""
      />
      <br />
      <p>Value : {value}</p>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleSub}>SUB</button>
      <button onClick={handleMul}>MUL</button>
      <button onClick={handleDiv}>DIVIDE</button>
    </div>
  );
}

export default ManualCounter;
