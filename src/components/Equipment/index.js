import React from 'react';

function Supplies({supplies}) {
    const {
        item,
        weight,
        qty,
        cost
    } = supplies;

    return (
        <div class="content center">
            <h2>{item}:</h2>
            <h2>Weight: {weight}</h2>
            <h2>QTY: {qty}</h2>
            <h2>Cost: {cost} </h2>
        </div>
    )
}

export default Supplies;