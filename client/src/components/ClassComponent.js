import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
width: 80%;
display: flex;
justify-content: center;
flex-wrap: wrap;
margin: 0 auto;
`

class ClassComponent extends Component {
    constructor(){
        super();
        this.state = {
        players: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/players')
        .then(response => {
            console.log(response.data)
            this.setState({
                players: response.data
            })
        })
    }

    render(){
        return <StyledDiv>{this.state.players.map(player => <PlayerCard player={player} key={player.id}/>)}</StyledDiv>
    }
}

export default ClassComponent; 