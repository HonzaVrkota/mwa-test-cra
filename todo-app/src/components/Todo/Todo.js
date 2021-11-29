import { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState(["marek", "honza"]);

  return (
    <div className="todo">
      <section className="todo-wrapper">
        {todos.map((item, i) => (
          <TodoItem content={item} key={i} />
        ))}

        <section className="add-btn">
          <button>Add todo</button>
        </section>
      </section>
    </div>
  );
};

export default Todo;
