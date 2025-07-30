import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostCreate = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        const newPost = {
            title,
            body,
            created_at: new Date().toLocaleDateString(),
        };

        fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        }).then(() => {
            console.log("done");
            navigate("/");
        });
    };
    return (
        <>
            <h1 className="font-bold text-2xl mb-6">Create a new post</h1>
            <form onSubmit={handleForm}>
                <div className="mb-4">
                    <label>Post title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2"
                    />
                </div>
                <div className="mb-8">
                    <label>Post content</label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2"
                    ></textarea>
                </div>
                <button className="bg-indigo-400 text-white block w-full p-2 rounded-lg hover:bg-indigo-600">
                    Create
                </button>
            </form>
        </>
    );
};

export default PostCreate;
