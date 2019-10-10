import React from 'react';

function StockPost ({ticker, price, volume, user, _id}) {
    return (
        <div style={{width: "25rem"}}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Symbol: {ticker}</li>
                <li className="list-group-item">Price: {price}</li>
                <li className="list-group-item">Volume: {volume}</li>
                
            </ul>
        </div>
    )
}

export default StockPost;