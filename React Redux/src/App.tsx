// import Counter from "./components/Counter";
// import FilterButtons from "./components/FilterButtons";
// import TodoInput from "./components/TodoInput";
// import TodoList from "./components/TodoList";

import UsersList from "./components/UsersList";

function App() {
    // Store
    // Actions
    // Reducers

    // configureStore
    // createSlice
    // <Provider store={store}></Provider> in <App>
    // useSelector
    // useDispatch
    // createAsyncThunk
    // extraReducers

    return (
        <div className="main">
            <h1>Redux Toolkit Fundamentals</h1>
            {/* <Counter /> */}
            {/* <div className="totoWrap">
                <TodoInput />
                <TodoList />
                <FilterButtons />
            </div> */}

            <UsersList />
        </div>
    );
}

export default App;
