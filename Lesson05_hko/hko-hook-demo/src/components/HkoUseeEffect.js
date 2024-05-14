import React, { useState, useEffect } from 'react';

export default function HkoUseeEffect() {
    const [count, setCount] = useState(0);

    const HkoHandleClick = () => {
        setCount(prev => prev + 1);
    };

    useEffect(() => {
        document.title = `Hoàng Kim Oanh : You clicked ${count} times`;
        console.log(`You clicked ${count} times`);
    });

    useEffect(() => {
        console.log("chạy lần đầu tiên - một lần");
    }, []);

    useEffect(() => {
        console.log(`useEffect count Click : ${count}`);
    }, [count]);

    return (
        <div>
            <h2>Demo useEffect</h2>
            <p>You clicked {count} times</p>
            <button onClick={HkoHandleClick}>
                Click me
            </button>
        </div>
    );
}
