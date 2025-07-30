import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const Search = () => {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        if (debouncedQuery) {
            console.log("🔍 Searching for:", debouncedQuery);
            // ضع هنا طلب الـ API
        }
    }, [debouncedQuery]);

    return (
        <input
            className="search"
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    );
};

export default Search;
