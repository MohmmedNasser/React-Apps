// import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { capitalizeFirstLetter } from "../lib/utils";

const ListItems = () => {
    const initialItems = [
        {
            name: "Item 1",
            id: 1,
        },
        {
            name: "Item 2",
            id: 2,
        },
    ];

    // const [items, setItems] = useState(initialItems);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [items, setItem] = useLocalStorage("items", initialItems);

    return (
        <section>
            <ul>
                {items.map((item) => (
                    // <li key={item.id}>{item.name}</li>
                    <li key={item.id}>{capitalizeFirstLetter(item.name)}</li>
                ))}
            </ul>
        </section>
    );
};

export default ListItems;
