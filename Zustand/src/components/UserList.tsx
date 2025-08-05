import { useEffect } from "react";
import { useUserStore } from "../store/useUserStore";

const UserList = () => {
    const { users, isLoading, isError, fetchUsers } = useUserStore();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    if (isLoading) return <p>Loading ...</p>;
    if (isError) return <p>Error: Error fetching users</p>;

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};

export default UserList;
