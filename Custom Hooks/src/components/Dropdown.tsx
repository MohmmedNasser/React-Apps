import { useRef, useState } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

function Dropdown() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useOnClickOutside(ref, () => setOpen(false));

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={() => setOpen(!open)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Click Outside Menu
            </button>
            {open && (
                <ul className="absolute mt-2 bg-white shadow rounded p-2 border">
                    <li className="px-4 py-2 hover:bg-gray-100">Item 1</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Item 2</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Item 3</li>
                </ul>
            )}
        </div>
    );
}

export default Dropdown;
