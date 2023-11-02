/* eslint-disable react/prop-types */

export default function Form({
  handleSubmit,
  newTask,
  setNewTask,
  newDescription,
  setNewDescription,
}) {
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-field">
          <label htmlFor="task">Task</label>
          <input
            id="task"
            placeholder="Study React"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            placeholder="States"
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-field-button">
          <button className="buttonAddTodo">Add Todo</button>
        </div>
      </form>
    </>
  );
}
