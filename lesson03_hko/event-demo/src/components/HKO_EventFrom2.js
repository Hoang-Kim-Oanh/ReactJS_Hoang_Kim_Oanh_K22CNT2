import React from 'react';

export default function MyComponent() {
    const EventHandleclick1 = (content) => {
        console.log('===================================');
        console.log(content);
        console.log('===================================');
    }

    return (
        <div className='alert alert-success'>
            <h2>Event Demo - function component</h2>
            <button onClick={() => EventHandleclick1("Hoàng Kim Oanh")}>gọi khi render</button>
            <button onClick={() => EventHandleclick1("K22CNT2-reactjs")}>gọi khi click</button>
        </div>
    );
}
