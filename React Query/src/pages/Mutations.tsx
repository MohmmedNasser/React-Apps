import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addPost, fetchPosts, type Post } from "../api/posts";
import PostCard from "../components/PostCard";

// for Optimistic Update
const Mutations = () => {
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");

    const queryClient = useQueryClient();

    const { data: posts, isLoading } = useQuery<Post[]>({
        queryKey: ["posts"],
        queryFn: () => fetchPosts(1),
    });

    const { mutate, isPending, isSuccess, isError, error } = useMutation({
        mutationFn: addPost,

        // هذه الدالة يتم تشغيلها قبل تنفيذ الطلب الحقيقي (قبل addPost).
        // الهدف منها هو إجراء تحديث متفائل (Optimistic Update) أي عرض البيانات الجديدة للمستخدم فورًا بدون انتظار الاستجابة من السيرفر.
        onMutate: async (newPost) => {
            // – يوقف أي استعلام جاري لـ ["posts"] لتجنب التعارض.
            await queryClient.cancelQueries({ queryKey: ["posts"] });

            // – يأخذ نسخة من البيانات السابقة لتتمكن من التراجع عنها إذا فشل الطلب.
            const prev = queryClient.getQueryData<Post[]>(["posts"]);

            // – يحدث بيانات الكاش مؤقتًا ليظهر المنشور الجديد فورًا في الواجهة.
            queryClient.setQueryData<Post[]>(["posts"], (old) =>
                old ? [newPost, ...old] : [newPost]
            );

            // – يُرجع البيانات السابقة لاستخدامها لاحقًا في onError في حال فشل العملية.
            return { prev };
        },

        // يتم استدعاؤها إذا فشلت العملية (مثلاً لو فشل الاتصال بالسيرفر).
        // تقوم بإرجاع البيانات إلى حالتها السابقة باستخدام context?.prev التي أعدناها من onMutate.
        onError: (_err, _newPost, context) => {
            queryClient.setQueryData(["posts"], context?.prev);
        },

        // يتم استدعاؤها بعد نجاح أو فشل الطلب.
        // تقوم بإعادة جلب البيانات من السيرفر للتأكد أن الكاش يعكس البيانات الحقيقية من السيرفر.
        onSettled: () => {
            // بما اننا لا نحفظ البيانات على السيرفر ، عندما يقوم بجلب البيانات مرة اخرى تختفي البيانات الجديدة
            // queryClient.invalidateQueries({ queryKey: ["posts"] });
        },
    });

    const handleForm = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(
            { title, body },
            {
                onSuccess: () => {
                    setTitle("");
                    setBody("");
                    // بما اننا لا نحفظ البيانات على السيرفر ، عندما يقوم بجلب البيانات مرة اخرى تختفي البيانات الجديدة
                    // queryClient.invalidateQueries({ queryKey: ["posts"] });
                    //  toast.success("Comment posted successfully!");
                },
                onError: () => {
                    // toast.error("Failed to post comment. Please try again.");
                },
            }
        );
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Optimistic Update</h2>
            <form onSubmit={handleForm}>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Title"
                />
                <input
                    type="text"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    placeholder="Body"
                />
                <button type="submit" disabled={isPending}>
                    {isPending ? "submiting ..." : "Add Post"}
                </button>
            </form>

            <hr style={{ margin: "20px 0" }} />

            {isLoading && <p>Loading posts...</p>}

            {isSuccess && (
                <p style={{ color: "green" }}>Post added successfully!</p>
            )}

            {isError && (
                <p style={{ color: "red" }}>
                    Error: {(error as Error).message}
                </p>
            )}

            {posts?.map((post) => (
                <PostCard key={post.title} post={post} />
            ))}
        </div>
    );
};

export default Mutations;
