// import { useState } from "react";
import CartExample from "./ReducerHook/CartExample";
import CounterExample from "./ReducerHook/CounterExample";
import FormExample from "./ReducerHook/FormExample";
import SimpleExample from "./ReducerHook/SimpleExample";

import { FirstContext } from "./Context/FirstContext";
import Child from "./ContextHook/Child";
import { AuthContext } from "./Context/AuthContext";
import Profile from "./ContextHook/Profile";
import ThemeProvider from "./ContextHook/ThemeProvider";
import ThemeToggle from "./ContextHook/ThemeToggle";

function App() {
    // const [theme, setTheme] = useState("light");
    // const [user, setUser] = useState(null);

    return (
        <div className="container">
            {/* ReducerHook */}

            {/* <SimpleExample /> */}
            {/* <CounterExample /> */}
            {/* <FormExample /> */}
            {/* <CartExample /> */}

            {/* ContextHook */}

            {/* <FirstContext.Provider value={{ theme, setTheme }}>
                <h1>React useContext Example</h1>
                <Child />
            </FirstContext.Provider> */}

            {/* <AuthContext.Provider value={{ user, setUser }}>
                <Profile />
            </AuthContext.Provider> */}

            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        </div>
    );
}

export default App;
