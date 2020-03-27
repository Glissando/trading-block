import React from 'react';

export default function Quote(props) {
    
    return(
        <div className="Section">
            <h2>Price: ${props.quote.latestPrice}</h2>
            <h2>Volume: {props.quote.avgTotalVolume}</h2>
            <h2>Time: {props.quote.latestTime}</h2>
        </div>
    );
}