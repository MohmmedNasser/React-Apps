import { useContext } from "react";
import { FirstContext } from "../Context/FirstContext";

const Child = () => {
    const { theme, setTheme } = useContext(FirstContext);

    return (
        <div>
            <p>Current Theme: {theme}</p>
            <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                Toggle Theme
            </button>
        </div>
    );
};

export default Child;
