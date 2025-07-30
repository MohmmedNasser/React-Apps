import { useEffect, useState } from "react";
import { PostItem } from "../components/PostItem";
import { LoadingSpinner } from "../components/LoadingSpinner";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((res) => res.json())
            .then((data) => {
                // throw new Error("Smothing wrong");
                data.sort(
                    (a, b) => new Date(b.created_at) - new Date(a.created_at)
                );
                setPosts(data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                setError(err.message);
            });
    }, []);

    const handleDelete = (id) => {
        const newPosts = posts.filter((post) => post.id !== id);
        setPosts(newPosts);
        fetch("http://localhost:3000/posts/" + id, {
            method: "DELETE",
        });
    };

    return (
        <>
            {posts.length === 0 && !loading && !error && (
                <p className="text-center text-2xl my-10">No posts found</p>
            )}
            {loading && <LoadingSpinner />}
            {error && (
                <p className="text-center text-red-600 text-sm my-10">
                    {error}
                </p>
            )}
            <PostItem posts={posts} handleDelete={handleDelete} />
        </>
    );
};

export default Home;
