import React, { useState } from 'react';

export default function Counter(count) {
    const [count, setCount] = useState(0);
    return(
        <div className="Counter">
            <h1>{ count }</h1>
        </div>
    );
}