import { createSlice } from "@reduxjs/toolkit";

export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface TodosState {
    items: Todo[],
    filter: 'all' | 'completed' | 'pending',
}

const loadTodos = () => {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
}

const initialState: TodosState = {
    items: loadTodos(),
    filter: 'all',
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo: Todo = {
                id: crypto.randomUUID(),
                text: action.payload,
                completed: false,
            }
            state.items.push(newTodo)
            localStorage.setItem('todos', JSON.stringify(state.items))
        },

        toggleTodo: (state, action) => {
            const todo = state.items.find((t) => t.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
            localStorage.setItem('todos', JSON.stringify(state.items))
        },

        deleteTodo: (state, action) => {
            state.items = state.items.filter((t) => t.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.items))
        },

        editTodo: (state, action) => {
            const todo = state.items.find((t) => t.id === action.payload.id)
            if (todo) {
                todo.text = action.payload.newText
            }
            localStorage.setItem('todos', JSON.stringify(state.items))
        },

        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    },
});


export const { addTodo, toggleTodo, deleteTodo, editTodo, setFilter } = todosSlice.actions

export default todosSlice.reducer