/* eslint-disable react/prop-types */
export default function List({ todos, handleDelete, handleComplete }) {
  return (
    <>
      <article className="list">
        {todos.length === 0 && <h1 className="empty">No Todos</h1>}
        {todos.map((todo) => (
          <div key={todo.id} className="list-field">
            <div className="list-content">
              <h1 className={todo.completed ? "completed" : ""}>{todo.task}</h1>
              <p className={todo.completed ? "completed" : ""}>
                {todo.description}
              </p>
            </div>
            <div className="list-buttons">
              <label className="labelComplete" htmlFor={todo.id}>
                Complete
                <input
                  id={todo.id}
                  className="buttonCompleteTodo"
                  type="checkbox"
                  onChange={(e) => handleComplete(todo.id, e.target.checked)}
                />
              </label>
              <input
                className={todo.isEditing ? "" : "display-none"}
                type="text"
              />
              <button
                onClick={() => handleDelete(todo.id)}
                className="buttonDeleteTodo"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </article>
    </>
  );
}
