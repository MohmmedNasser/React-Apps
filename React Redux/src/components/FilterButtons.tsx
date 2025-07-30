import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../state/store";
import { setFilter } from "../state/todo/todoSlice";

const FilterButtons = () => {
    const dispatch: AppDispatch = useDispatch();
    const filter = useSelector((state: RootState) => state.todos.filter);

    return (
        <div className="filters">
            <button
                className={filter === "all" ? "active" : ""}
                onClick={() => dispatch(setFilter("all"))}
            >
                All
            </button>
            <button
                className={filter === "completed" ? "active" : ""}
                onClick={() => dispatch(setFilter("completed"))}
            >
                Completed
            </button>
            <button
                className={filter === "pending" ? "active" : ""}
                onClick={() => dispatch(setFilter("pending"))}
            >
                Pending
            </button>
        </div>
    );
};

export default FilterButtons;
