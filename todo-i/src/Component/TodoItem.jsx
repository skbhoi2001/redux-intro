function TodoItem({ title, status, id, onDelete, onToggle }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "3rem",
        justifyContent: "center",
        margin: "10px"
      }}
    >
      <div>{title}</div>
      <div>{`${status}`}</div>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onToggle(id)}>Toggle</button>
    </div>
  );
}

export default TodoItem;
