import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../state/store";
import { deleteTodo, editTodo, toggleTodo } from "../state/todo/todoSlice";
import { useState } from "react";

const TodoList = () => {
    const { items, filter } = useSelector((state: RootState) => state.todos);
    const dispatch: AppDispatch = useDispatch();

    const [editId, setEditId] = useState<string | null>(null);
    const [editText, setEditText] = useState("");

    const filteredTodos = items.filter((todo) => {
        if (filter === "completed") return todo.completed;
        if (filter === "pending") return !todo.completed;
        return todo;
    });

    const handleEdit = (id: string, text: string) => {
        setEditId(id);
        setEditText(text);
    };

    const handleSave = (id: string) => {
        dispatch(editTodo({ id, newText: editText }));
        setEditId(null);
        setEditText("");
    };

    return (
        <>
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <li
                        key={todo.id}
                        className={todo.completed ? "completed" : ""}
                    >
                        {editId == todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) =>
                                        setEditText(e.target.value)
                                    }
                                />
                                <button onClick={() => handleSave(todo.id)}>
                                    Save
                                </button>
                                <button onClick={() => setEditId(null)}>
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <>
                                <span
                                    onClick={() =>
                                        dispatch(toggleTodo(todo.id))
                                    }
                                >
                                    {todo.text}
                                </span>
                                <div>
                                    <button
                                        onClick={() =>
                                            handleEdit(todo.id, todo.text)
                                        }
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() =>
                                            dispatch(deleteTodo(todo.id))
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}

                        {/* <span onClick={() => dispatch(toggleTodo(todo.id))}>
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>
                            ❌
                        </button> */}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TodoList;
