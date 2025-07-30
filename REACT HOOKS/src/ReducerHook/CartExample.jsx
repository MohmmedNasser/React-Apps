import { useReducer } from "react";

const CartExample = () => {
    const initialCart = [];

    const cartReducer = (state, action) => {
        switch (action.type) {
            case "ADD_ITEM":
                return [...state, action.item];

            case "REMOVE_ITEM":
                return state.filter((_, index) => index !== action.index);

            case "CLEAR_CART":
                return initialCart;

            default:
                return state;
        }
    };

    const [cart, setCart] = useReducer(cartReducer, initialCart);

    return (
        <>
            <h1 className="heading">Shopping Cart Example</h1>
            <h2>🛒 Cart ({cart.length} items)</h2>
            <button
                onClick={() => setCart({ type: "ADD_ITEM", item: "Apple" })}
            >
                Add Apple
            </button>
            <button
                onClick={() => setCart({ type: "ADD_ITEM", item: "Banana" })}
            >
                Add Banana
            </button>
            <button onClick={() => setCart({ type: "CLEAR_CART" })}>
                Clear Cart
            </button>

            <ul className="list">
                {cart.map((item, index) => (
                    <li key={index}>
                        <span>{item}</span>
                        <button
                            onClick={() =>
                                setCart({ type: "REMOVE_ITEM", index })
                            }
                        >
                            ❌ Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CartExample;
