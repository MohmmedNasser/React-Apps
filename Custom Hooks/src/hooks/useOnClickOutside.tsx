import { useEffect } from "react";

function useOnClickOutside(
    ref: React.RefObject<HTMLElement | null>,
    handler: (e: MouseEvent) => void
) {
    useEffect(() => {
        function listener(e: MouseEvent) {
            if (!ref.current || ref.current.contains(e.target as Node)) {
                return;
            }
            handler(e);
            console.log("I'm click outside");
        }

        document.addEventListener("mousedown", listener);

        return () => document.removeEventListener("mousedown", listener);
    }, [ref, handler]);
}

export default useOnClickOutside;
