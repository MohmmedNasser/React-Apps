import axios from 'axios'

export interface Post {
    id?: number
    title: string
    body: string
}

export const fetchPosts = async (page = 1, limit = 10): Promise<Post[]> => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
    return res.data;
}

export const addPost = async (newPost: Post): Promise<Post> => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    return res.data;
}

export const searchUser = async (query: string): Promise<string[]> => {
    const users = [
        "mohammed", "nasser", "ahmed", "sara", "layla", "ali", "fatima"
    ];

    return new Promise((resolve) => {
        setTimeout(() => {
            const results = users.filter((user) =>
                user.toLowerCase().includes(query.toLowerCase())
            );
            resolve(results);
        }, 1000);
    });
}