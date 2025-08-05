import { create } from "zustand";
import { persist } from "zustand/middleware";

type CounterState = {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export const useCounterStore = create<CounterState>()(persist((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}), {
    name: 'counter-storage'
}));