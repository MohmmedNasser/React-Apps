import React from "react";
import useTheme from "../Hooks/useTheme";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            <p>Current Theme: {theme}</p>
            <button onClick={() => setTheme({ type: "TOGGLE" })}>
                Toggle Theme
            </button>
        </div>
    );
};

export default ThemeToggle;
