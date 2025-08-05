import { useInfiniteQuery } from "@tanstack/react-query";
// import type { QueryFunctionContext } from "@tanstack/react-query";
import { fetchPosts, type Post } from "../api/posts";
import PostCard from "../components/PostCard";
import { useEffect, useRef } from "react";

const Home = () => {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useInfiniteQuery<Post[], Error>({
            queryKey: ["infinite-posts"],
            queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam as number),
            // هذه دالة تُحدد ما هو "رقم الصفحة التالي" الذي سيتم تمريره إلى الدالة queryFn لجلب المزيد من البيانات.
            // هذه الدالة تتحكم في التصفح (pagination) اللانهائي، وتحدد متى يجب التوقف عن جلب صفحات إضافية، استنادًا إلى عدد الصفحات الحالية.
            // pages: هو مصفوفة بجميع الصفحات التي تم جلبها حتى الآن.
            getNextPageParam: (_lastPage, pages) =>
                pages.length + 1 <= 10 ? pages.length + 1 : undefined,
            initialPageParam: 1,
        });

    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasNextPage) fetchNextPage();
        });
        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }
        return () => observer.disconnect();
    }, [hasNextPage, fetchNextPage]);

    return (
        <div>
            <h2>Infinite Scroll (Auto)</h2>
            {data?.pages.map((group, i) => (
                <div key={i}>
                    {(group as Post[]).map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            ))}

            <div ref={loadMoreRef} style={{ height: 50 }} />
            {isFetchingNextPage && <p>Loading more...</p>}
        </div>
    );
};

export default Home;
