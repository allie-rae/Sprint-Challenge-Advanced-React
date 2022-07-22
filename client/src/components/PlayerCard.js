import React from 'react';
import styled from 'styled-components';

const StyledPlayerDiv = styled.div`
margin: 20px;
padding: 10px;
border: 1px solid black;
width: 30%;
`

const PlayerCard = (props) => {
    return(
        <StyledPlayerDiv id="data-testid">
            <h4>{props.player.name}</h4>
            <p>{props.player.country}</p>
        </StyledPlayerDiv>
    ) 
}

export default PlayerCard;