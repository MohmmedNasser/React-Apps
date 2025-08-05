import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const addUser = async (newUser: { name: string }) => {
    const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newUser
    );
    return res.data;
};

const AddUserForm = () => {
    const queryClient = useQueryClient();

    const [name, setName] = useState("");

    const mutation = useMutation({
        mutationFn: addUser,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = (
            e.currentTarget.elements.namedItem("name") as HTMLInputElement
        ).value;
        console.log("Name:", name);
        mutation.mutate({ name });
    };

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={() => setName(name)}
                    placeholder="Name"
                    required
                />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUserForm;
