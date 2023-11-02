import { useState } from "react";
import Form from "./Components/Form";
import List from "./Components/List";

function App() {
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [todos, setTodos] = useState([
    {
      id: crypto.randomUUID(),
      task: "Caminhada matinal",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis odit laudantium iure illum molestiae, dolorem sequi sit fuga, impedit fugiat rem! Eaque officiis recusandae quae est qui distinctio odit!",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      task: "Café da manhã reforçado",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum earum dignissimos ratione officiis, harum iusto magnam! Eaque maiores sit vero officiis deleniti, beatae at dolor nulla in praesentium fuga quod!",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      task: "Alongamentos",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque iusto dolor reprehenderit facere dolorem consequuntur provident, eaque et sunt totam ea minus voluptatum culpa nulla! Incidunt magnam ratione aspernatur sed!",
      completed: false,
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          task: newTask,
          description: newDescription,
          completed: false,
        },
      ];
    });

    setNewTask("");
    setNewDescription("");
  }

  function handleDelete(id) {
    setTodos((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  }

  function handleComplete(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  return (
    <>
      <header>
        <h1>My Todos</h1>
      </header>
      <main>
        <Form
          handleSubmit={handleSubmit}
          newTask={newTask}
          setNewTask={setNewTask}
          newDescription={newDescription}
          setNewDescription={setNewDescription}
        />
        <List
          todos={todos}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      </main>
    </>
  );
}

export default App;
