import ListHeader from "../listHeader/listHeader";
import item_client from "../../clients/item_client";
import { useCallback, useEffect, useState } from "react";
import styles from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList() {
  const itemClient = new item_client();
  const mockTodos = [
    { id: 1, todo: "test", isPokemon: false, status: "done" },
    {
      id: 2,
      todo: "test2",
      isPokemon: false,
      status: "done",
    },
  ];

  async function updateStatus(id, status) {
    try {
      await itemClient.updateStatus(id, status);
    } catch (e) {
      console.log(e);
    }
  }
  async function initialTodos() {
    try {
      const todos = await itemClient.getTodos();
      setTodos(todos);
    } catch (e) {
      console.log(e);
    }
  }

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    try {
      initialTodos();
      // initialTodos();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDeleteAll = () => {
    setTodos([]);
  };

  return (
    <div>
      <ListHeader onTodoAdd={handleAddTodo} onDeleteAll={handleDeleteAll} />
      <section className={styles.todoListContainer}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo.todo} status = {todo.status} updateStatus />
        ))}
      </section>
    </div>
  );
}
