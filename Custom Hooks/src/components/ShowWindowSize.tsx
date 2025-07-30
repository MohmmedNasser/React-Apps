import useWindowSize from "../hooks/useWindowSize";

const ShowWindowSize = () => {
    const { width, height } = useWindowSize();

    return (
        <div>
            <p>
                Width: {width} | Height: {height}
            </p>
        </div>
    );
};

export default ShowWindowSize;
