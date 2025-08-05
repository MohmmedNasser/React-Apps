import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav style={{ display: "flex", gap: "10px", padding: "10px" }}>
            <Link to="/">Infinite Scroll</Link>
            <Link to="/load-more">Load More</Link>
            <Link to="/paginated">Paginated</Link>
            <Link to="/mutations">Mutations</Link>
            <Link to="/search">Search</Link>
        </nav>
    );
};

export default Header;
