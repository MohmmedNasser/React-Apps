import { useReducer } from "react";

const CounterExample = () => {
    const initialState = { count: 0 };

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 };
            case "decrement":
                if (state.count == 0) {
                    return state;
                } else {
                    return { count: state.count - 1 };
                }
            case "reset":
                return initialState;
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>Counter Example</h1>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: "increment" })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "decrement" })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </>
    );
};

export default CounterExample;
