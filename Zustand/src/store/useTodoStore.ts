import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Todo {
    id: number,
    title: string,
    done: boolean
}

interface TodoState {
    todos: Todo[],
    addTodo: (title: string) => void,
    toggleTodo: (id: number) => void,
    deleteTodo: (id: number) => void,
}

// export const useTodoStore = create<TodoState>((set) => ({
//     todos: [],
//     addTodo: (title: string) => set((state) => ({
//         todos: [
//             ...state.todos,
//             { id: Date.now(), title, done: false }
//         ],
//     })),
//     toggleTodo: (id: number) => set((state) => ({
//         todos: state.todos.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo)
//     })),
//     deleteTodo: (id: number) => set((state) => ({
//         todos: state.todos.filter((todo) => todo.id !== id)
//     }))
// }))

export const useTodoStore = create<TodoState>()(persist((set) => ({
    todos: [],
    addTodo: (title: string) => set((state) => ({
        todos: [
            ...state.todos,
            { id: Date.now(), title, done: false }
        ],
    })),
    toggleTodo: (id: number) => set((state) => ({
        todos: state.todos.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo)
    })),
    deleteTodo: (id: number) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id)
    }))
}), { name: 'todos-storage' }));