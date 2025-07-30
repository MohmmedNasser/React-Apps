import { useReducer } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ThemeProvider = ({ children }) => {
    const themeReducer = (state, action) => {
        switch (action.type) {
            case "TOGGLE":
                return state === "light" ? "dark" : "light";
            default:
                return state;
        }
    };

    const [theme, setTheme] = useReducer(themeReducer, "light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
