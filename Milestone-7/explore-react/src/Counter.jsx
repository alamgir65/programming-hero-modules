import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count+1);
    }

    return (
        <div style={{border:'2px solid yellow',margin : '10px', padding : '5px',borderRadius : '5px'}}>
            <h1>Count : {count}</h1>
            <button onClick={handleIncrease}>Increase Count</button>
        </div>
    );
};

export default Counter;