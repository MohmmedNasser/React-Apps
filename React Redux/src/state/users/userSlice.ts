import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface User {
    id: number,
    name: string,
    email: string,
}

interface UserState {
    data: User[],
    loading: boolean,
    error: string | null,
}

const initialState: UserState = {
    data: [],
    loading: false,
    error: null,
}

export const fetchUsers = createAsyncThunk<User[]>('users/fetchUsers', async (_, thunkAPI) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = response.json();
        return data
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue('Failed to fetch users');
    }
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        }).addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        }).addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
    }
})


export default usersSlice.reducer;