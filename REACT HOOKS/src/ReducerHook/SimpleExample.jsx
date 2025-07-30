import { useReducer } from "react";

const SimpleExample = () => {
    // const [state, dispatch] = useReducer(reducer, initialArg, init?)

    // const nameReducer = (state, action) => {
    //     if (action.type === "change") {
    //         return "Mohammed";
    //     } else {
    //         return state;
    //     }
    // };

    const nameReducer = (state, action) =>
        action.type == "change" ? "Moahmmed" : state;

    const [name, setName] = useReducer(nameReducer, "ahmed");

    return (
        <>
            <h1 className="heading">React Hooks: useReducer</h1>

            <h6>{name}</h6>
            <button onClick={() => setName({ type: "change" })}>
                Change name
            </button>

            <br />
        </>
    );
};

export default SimpleExample;
