import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { searchUser } from "../api/posts";

const Search = () => {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 500);

    const {
        data: results,
        isLoading,
        isError,
        error,
        isSuccess,
    } = useQuery({
        queryKey: ["search", debouncedQuery],
        queryFn: () => searchUser(debouncedQuery),
        enabled: !!debouncedQuery, // Only run the query if debouncedQuery is not empty
    });

    return (
        <div style={{ padding: 20 }}>
            <h2>🔍 Debounced Search</h2>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for users..."
                style={{ padding: "8px", width: "300px" }}
            />

            {isLoading && <p>Loading...</p>}
            {isError && (
                <p style={{ color: "red" }}>
                    Error: {(error as Error).message}
                </p>
            )}

            {isSuccess && (
                <>
                    {results.length === 0 ? (
                        <p style={{ color: "gray" }}>❌ No users found.</p>
                    ) : (
                        <ul>
                            {results.map((user, i) => (
                                <li key={i}>{user}</li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
    );
};

export default Search;
