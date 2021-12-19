import React from "react";
import { Counter } from "./Component/Counter";
import ManualCounter from "./Component/ManualCounter";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
      <ManualCounter />
    </div>
  );
}
