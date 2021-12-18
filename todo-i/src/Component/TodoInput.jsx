const { useState } = require("react");

function TodoInput({ onAdd }) {
  const [state, setState] = useState("");

  return (
    <div>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Add"
      />
      <button
        onClick={() => {
          onAdd(state);
          setState("");
        }}
      >
        ADD
      </button>
    </div>
  );
}

export default TodoInput;
