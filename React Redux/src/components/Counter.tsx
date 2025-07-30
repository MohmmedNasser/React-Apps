import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../state/store";
import {
    increment,
    decrement,
    incrementByAmount,
    reset,
    incrementAsync,
} from "../state/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch: AppDispatch = useDispatch();

    return (
        <div>
            <h1>Counter</h1>
            <h5 className="count">{count}</h5>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(incrementAsync(5))}>
                incrementAsync
            </button>
            <button onClick={() => dispatch(incrementByAmount(10))}>
                Increment by 10
            </button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default Counter;
