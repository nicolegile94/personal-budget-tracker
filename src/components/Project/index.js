import React from 'react';

function Project({project}) {
    const {
        name,
        totalScore,
        modifier
    } = project;

    return (
        <div class="content center">
            <h2>{name}:</h2>
            <h2>Total Score: {totalScore}</h2>
            <h2> Modifier: {modifier} </h2>
        </div>
    )
}

export default Project;