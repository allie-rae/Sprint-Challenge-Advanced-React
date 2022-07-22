import React, { Component } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, VerticalBarSeries, VerticalGridLines, HorizontalGridLines} from 'react-vis';
import axios from 'axios';
import '../App.css'

class GraphStretch extends Component {
    constructor(){
        super()
        this.state = {
            data: []
        }
    }

        componentDidMount() {
            axios.get('http://localhost:5000/api/players')
            .then(response => {
                this.setState({
                    data: response.data
                })
            })
        }
    

  render() {
    const data = [
      {x: 'United States', y: 8},
      {x: 'Brazil', y: 5},
      {x: 'France', y: 4},
      {x: 'Sweden', y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];
    return (
      <div className="graph">
        <XYPlot height={300} width={300} xType="ordinal">
          <VerticalGridLines />
          <HorizontalGridLines />
          <VerticalBarSeries data={data} />
        </XYPlot>
      </div>
    );
  }
}

export default GraphStretch;