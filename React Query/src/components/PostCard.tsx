import type { Post } from "../api/posts";

const PostCard = ({ post }: { post: Post }) => {
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostCard;
