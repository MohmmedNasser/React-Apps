import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import LoadMore from "./pages/LoadMore";
import Paginated from "./pages/Paginated";
import Mutations from "./pages/Mutations";
import Search from "./pages/Search";

// import AddUserForm from "./components/AddUserForm";
// import Users from "./components/Users";

function App() {
    return (
        // <>
        //     <AddUserForm />
        //     <Users />
        // </>
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/load-more" element={<LoadMore />}></Route>
                    <Route path="/paginated" element={<Paginated />}></Route>
                    <Route path="/mutations" element={<Mutations />}></Route>
                    <Route path="/search" element={<Search />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
