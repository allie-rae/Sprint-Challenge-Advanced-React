import React from 'react';

const PlayerCard = (props) => {
    return(
        <div>
            <h3>{props.player.name}</h3>
            <p>{props.player.country}</p>
        </div>
    ) 
}

export default PlayerCard;