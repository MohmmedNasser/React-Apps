import useFetch from "../hooks/useFetch";

const UserList = () => {
    const { data: posts, loading } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return (
        <div>
            {loading && <p>loading ...</p>}
            {
                <ul>
                    {posts.slice(0, 5).map((post) => (
                        <li key={post.id}>{post.body}</li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default UserList;
