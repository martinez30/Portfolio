'use client'
import { useEffect, useState } from 'react';

function useWidth() {
    const [width, setWidth] = useState<number>(1440);

    useEffect(() => {
        const updatedWindowWidth = () => {
            if (window !== undefined) {
                const newWidth = window.innerWidth;
                setWidth(newWidth);
            }
        };

        if (window !== undefined) {
            window.addEventListener("resize", updatedWindowWidth);
            return () => window.removeEventListener("resize", updatedWindowWidth);
        }

        return () => { }
    }, []);

    return width;
}

export default useWidth;