import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../state/store";
import { addTodo } from "../state/todo/todoSlice";

const TodoInput = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch<AppDispatch>();

    const handleAdd = () => {
        if (text.trim() !== "") {
            dispatch(addTodo(text));
            setText("");
        }
    };

    return (
        <div className="todo-input">
            <input
                type="text"
                placeholder="Add new todo..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default TodoInput;
