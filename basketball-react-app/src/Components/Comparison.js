import React, { Component } from "react";
import "./Comparison.css";
import PlayerMatch from "./PlayerMatch";
import axios from 'axios'
import Search from '../Components/Search'

class Comparison extends Component {
  constructor() {
    super();

    this.state = {
      comparison: [],
      players: [],
      matchup: []
    };
  }
  handleClick = (player, evt) => {
    evt.preventDefault();
    if (this.state.matchup.length < 2) {
      this.setState({ matchup: [...this.state.matchup, { player }] });
    }
    if (this.state.matchup.length === 2) {
      const arr = [...this.state.matchup, { player }];
      const newArr = arr.pop();
      this.setState({ matchup: [newArr] });
    }

    
  }
  handleReset = evt => {
    evt.preventDefault();
    this.setState({
      matchup: []
    });
  };



  compare = stats => {
    var joined = this.state.comparison.concat(stats);
    this.setState({ comparison: joined });
  }
  componentDidMount(){
    axios.get("https://basketball-era.herokuapp.com").then(res => {
        this.setState({
          players: res.data
        });
      });
  };
  

  render() {
    let playerMatch = this.state.matchup.map((player, i) => {
      return (
        <PlayerMatch
          id={i + 1}
          key={i}
          player={player.player}
          compare={this.compare}
        />
      );
    });

    return (
      <div>
        <Search
          handleClick={this.handleClick}
          players={this.state.players}
          className="searchContainer"
        />
        <div className="mainAppContainer">
          <button className="reset-btn" onClick={this.handleReset}>reset</button>
        <div className="cardsContainer">{playerMatch}</div>
        {/* insert win logic component here, bring results from the lower components to state here */}
      </div>
      </div>
    );
  }
}

export default Comparison;
