import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    const nT = { ...newTodo, id: uuid() };
    setTodos((todos) => [...todos], nT);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    const uT = { ...updatedTodo };
    setTodos((todos) => [...todos], uT);
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="TodoApp">
      <div className="row">
        <div className="col-md-6">
          {todos 
          ? (<EditableTodoList todos={ todos } remove={ remove } update={ update } />)
          :(<span className="text-muted">You have no todos.</span>)}
            
        </div>
        <div className="col-md-6">
          <section className="mb-4">
            <h3>Top Todo</h3>
            { todos ? (
              <TopTodo todos={ todos } />
            ) : (
              <span className="text-muted">You have no todos.</span>
            )}
          </section>
          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={ create } />
          </section>
        </div>
      </div>
    </main>
  );
}

export default TodoApp;
