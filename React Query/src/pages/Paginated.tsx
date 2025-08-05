import { useQuery } from "@tanstack/react-query";
import { fetchPosts, type Post } from "../api/posts";
import { useState } from "react";
import PostCard from "../components/PostCard";

const Paginated = () => {
    const [page, setPage] = useState<number>(1);
    const maxPage = 10;

    const { data: posts, isLoading } = useQuery<Post[], Error>({
        queryKey: ["paginated-posts", page],
        queryFn: () => fetchPosts(page),
    });

    return (
        <div style={{ padding: 20 }}>
            <h2>Paginated</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                posts?.map((post: Post) => (
                    <PostCard key={post.id} post={post} />
                ))
            )}
            <div style={{ marginTop: 10 }}>
                <button
                    disabled={page === 1}
                    onClick={() => setPage((p) => p - 1)}
                >
                    Prev
                </button>
                <span style={{ margin: "0 10px" }}>Page {page}</span>
                <button
                    onClick={() => setPage((p) => p + 1)}
                    disabled={page >= maxPage}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Paginated;
