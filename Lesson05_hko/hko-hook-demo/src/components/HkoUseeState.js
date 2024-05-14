import React, { useState } from 'react';

export default function HkoUseeState() {
    const [count, setCount] = useState(10);
    const [ list ,setlist] = useState([]);
    const hkoHandleList = ()=>{
        let num = parseInt(Math.random()*100)
        setlist([
            ...list,
            num
        ])
        
        
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <hr/>
            <h3> List: {list.toString()}</h3>
            <button onClick={hkoHandleList }>Thêm ngẫu nhiên </button>
        </div>
    );
}
