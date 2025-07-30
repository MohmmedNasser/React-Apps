import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Profile = () => {
    const { user, setUser } = useContext(AuthContext);
    return (
        <>
            {user ? (
                <div>
                    <h2>Welcome, {user.name}</h2>
                    <button onClick={() => setUser(null)}>Logout</button>
                </div>
            ) : (
                <>
                    <h2>You are not login in</h2>
                    <button
                        onClick={() =>
                            setUser({
                                name: "Mohammed Nasser",
                                email: "nasser@gmail.com",
                            })
                        }
                    >
                        Login
                    </button>
                </>
            )}
        </>
    );
};

export default Profile;
