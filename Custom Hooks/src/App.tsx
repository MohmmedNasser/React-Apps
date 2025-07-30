import ListItems from "./components/ListItems";
import ThemeToggle from "./components/ThemeToggle";
import UserList from "./components/UserList";
import PostList from "./components/PostList";
import ShowWindowSize from "./components/ShowWindowSize";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

function App() {
    return (
        <div className="container">
            <Dropdown />
            <br />
            <Search />
            <br />
            <ShowWindowSize />
            <br />
            <PostList />
            <br />
            <UserList />
            <br />
            <ListItems />
            <br />
            <ThemeToggle />
        </div>
    );
}

export default App;
