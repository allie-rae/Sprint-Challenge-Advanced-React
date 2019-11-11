import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
import axios from 'axios';

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
        return <div>{this.state.players.map(player => <PlayerCard player={player} />)}</div>
    }
}

export default ClassComponent; 