import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface User {
    id: number;
    name: string;
}

const fetchUsers = async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
};

const Users = () => {
    const {
        data: users,
        error,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
        staleTime: 3000, // البيانات تُعتبر "قديمة" بعد 3 ثواني
        refetchOnWindowFocus: false, // منع التحديث عند الرجوع للنافذة
    });

    if (isLoading) return <p>Loadung ...</p>;
    if (error) return <p>Error occurred</p>;

    return (
        <>
            <h1>Users List</h1>
            <ul>
                {users.map((user: User) => (
                    <p key={user.id}>{user.name}</p>
                ))}
            </ul>
            <button onClick={() => refetch()}>Reload</button>
        </>
    );
};

export default Users;
