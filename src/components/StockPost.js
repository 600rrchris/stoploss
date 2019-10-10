import React from 'react';
import DeleteButton from './DeleteButton/DeleteButton'


function StockPost ({ticker, price, volume, user, _id, index, handledeleteStock}) {
    return (
        
        <div style={{width: "25rem"}}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Symbol: {ticker}</li>
                <li className="list-group-item">Price: {price}</li>
                <li className="list-group-item">Volume: {volume}</li>
                <DeleteButton 
                handleDelete={handledeleteStock}
                    index={index}
                    _id={_id}
                    user={user}
                />
            </ul>
        </div>
    )
}

export default StockPost;