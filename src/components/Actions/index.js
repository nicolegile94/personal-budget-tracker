import React from 'react';

function Action({action}) {
    const {
        weapon,
        range,
        hitDC,
        damage,
        type
    } = action;

    return (
        <div class="content center">
            <h2>{weapon}:</h2>
            <h2>Range: {range}</h2>
            <h2>Hit / DC: {hitDC}</h2>
            <h2>Damage: {damage} </h2>
            <h2>Type: {type}</h2>
        </div>
    )
}

export default Action;