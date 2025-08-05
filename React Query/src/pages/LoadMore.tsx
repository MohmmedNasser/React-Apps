import { useInfiniteQuery } from "@tanstack/react-query";
import type { QueryFunctionContext } from "@tanstack/react-query";
import { fetchPosts, type Post } from "../api/posts";
import PostCard from "../components/PostCard";

const LoadMore = () => {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useInfiniteQuery<Post[], Error>({
            queryKey: ["loadmore-posts"],
            queryFn: ({ pageParam = 1 }: QueryFunctionContext) =>
                fetchPosts(pageParam as number),
            getNextPageParam: (_lastPage, pages) =>
                pages.length + 1 <= 10 ? pages.length + 1 : undefined,
            initialPageParam: 1,
        });

    return (
        <div style={{ padding: 20 }}>
            <h2>Load More</h2>
            {data?.pages.map((group, i) => (
                <div key={i}>
                    {(group as Post[]).map((post: Post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            ))}
            {hasNextPage && (
                <button
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                >
                    {isFetchingNextPage ? "Loading..." : "Load More"}
                </button>
            )}
        </div>
    );
};

export default LoadMore;
