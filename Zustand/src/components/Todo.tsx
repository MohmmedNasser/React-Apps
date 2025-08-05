import { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

const Todo = () => {
    const [title, setTilte] = useState("");
    const todos = useTodoStore((state) => state.todos);
    const addTodo = useTodoStore((state) => state.addTodo);
    const toggleTodo = useTodoStore((state) => state.toggleTodo);
    const deleteTodo = useTodoStore((state) => state.deleteTodo);

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            addTodo(title);
            setTilte("");
        }
    };

    return (
        <div>
            <h1>ToDo App</h1>
            <input
                className="input"
                type="text"
                value={title}
                onChange={(e) => setTilte(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add</button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ marginBottom: "15px" }}>
                        <input
                            className="checkbox"
                            type="checkbox"
                            checked={todo.done}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span
                            className={`todo-title ${
                                todo.done ? "line-through" : ""
                            }  `}
                        >
                            {todo.title}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
