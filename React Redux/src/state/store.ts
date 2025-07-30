import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import todosReducer from "./todo/todoSlice";
import usersReducer from "./users/userSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer,
        users: usersReducer
    },
})

// ✅ Type للـ RootState (الحالة الكاملة)
export type RootState = ReturnType<typeof store.getState>

// ✅ Type للـ Dispatch
export type AppDispatch = typeof store.dispatch