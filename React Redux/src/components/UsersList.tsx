import { useEffect } from "react";
import type { AppDispatch, RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../state/users/userSlice";

const UsersList = () => {
    const dispatch: AppDispatch = useDispatch();
    const { data, loading, error } = useSelector(
        (state: RootState) => state.users
    );

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {!loading && !error && (
                <ul>
                    {data.map((user) => (
                        <li key={user.id}>
                            <strong> {user.name} </strong>
                            <span> {user.email} </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UsersList;
