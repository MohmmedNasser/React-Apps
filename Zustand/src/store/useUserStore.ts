import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
    id: number,
    name: string
}

interface userState {
    users: User[],
    isLoading: boolean,
    isError: boolean,
    fetchUsers: () => Promise<void>
}

export const useUserStore = create<userState>()(persist((set) => ({
    users: [],
    isLoading: false,
    isError: false,
    fetchUsers: async () => {

        set({ isLoading: true, isError: false });

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) throw new Error('Fetch failed')
            const data: User[] = await response.json();
            set({ users: data, isLoading: false })
        } catch (error) {
            set({ isError: true, isLoading: false });
            console.error('Error fetching users:', error)
        }
    }
}), { name: 'users-storage' }))