import { useState, useEffect } from 'react';

function useMousePosition() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        // Add event listener for mousemove
        window.addEventListener("mousemove", updateMousePosition);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return position;
}

export default useMousePosition;
