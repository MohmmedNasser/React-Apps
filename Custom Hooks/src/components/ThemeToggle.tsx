// import { useState } from "react";
import { capitalizeFirstLetter } from "../lib/utils";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeToggle = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [theme, setTheme] = useState("light");

    const [theme, setTheme] = useLocalStorage("theme", "light");

    return (
        <section>
            <p>current theme: {capitalizeFirstLetter(theme)}</p>
            <button onClick={() => setTheme("light")}>Light mode</button>
            <button onClick={() => setTheme("dark")}>Dark mode</button>
        </section>
    );
};

export default ThemeToggle;
