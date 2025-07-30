import useFetch from "../hooks/useFetch";

const UserList = () => {
    // interface userData {
    //     id: number;
    //     name: string;
    // }

    // const [users, setUsers] = useState<userData[]>([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setUsers(data);
    //             setLoading(false);
    //         });
    // }, []);

    const { data: users, loading } = useFetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    return (
        <div>
            {loading && <p>loading ...</p>}
            {
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default UserList;
