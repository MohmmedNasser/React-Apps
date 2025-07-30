import { useReducer } from "react";

const FormExample = () => {
    const initialFormState = {
        name: "",
        email: "",
        password: "",
    };

    const formReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE_INPUT":
                return {
                    ...state,
                    [action.field]: action.value,
                };
            case "RESET":
                return initialFormState;
            default:
                return state;
        }
    };

    const [formState, setFromState] = useReducer(formReducer, initialFormState);

    return (
        <div>
            <div>
                <p className="form-state">{formState.name}</p>
                <p className="form-state">{formState.email}</p>
                <p className="form-state">{formState.password}</p>
            </div>

            <form>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={(e) =>
                        setFromState({
                            type: "CHANGE_INPUT",
                            field: "name",
                            value: e.target.value,
                        })
                    }
                />

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={formState.email}
                    onChange={(e) =>
                        setFromState({
                            type: "CHANGE_INPUT",
                            field: "email",
                            value: e.target.value,
                        })
                    }
                />

                <input
                    type="password"
                    placeholder="Enter your password"
                    value={formState.password}
                    onChange={(e) =>
                        setFromState({
                            type: "CHANGE_INPUT",
                            field: "password",
                            value: e.target.value,
                        })
                    }
                />

                <button
                    type="button"
                    onClick={() => setFromState({ type: "RESET" })}
                >
                    Reast Form
                </button>
            </form>
        </div>
    );
};

export default FormExample;
