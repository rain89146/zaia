import React, {useEffect, useState} from 'react'

function getWindowSize() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}

export default function useWindowSize() {

    const [WindowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {

        //  Resizing event
        const resizing = () => setWindowSize(getWindowSize());
        
        //  Listen to window resizing event
        window.addEventListener('resize', resizing);

        //  Clear
        return () => window.removeEventListener('resize', resizing);
    }, [])

    //
    return WindowSize;
}
