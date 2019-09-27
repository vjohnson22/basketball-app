import React, { Component } from "react";
import axios from "axios";
import Search from "./Components/Search";
import Comparison from "./Components/Comparison";
import Home from "./Components/Home/Home";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Create from "./Components/Create";
import Delete from "./Components/Delete";
import WebFont from "webfontloader";
import Update from "./Components/Update";
import Header from "./Components/header";
import logo from "../src/pictures/logo.png";


class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      matchup: []
      
    };
  }
  
  // handleClick = (player, evt) => {
  //   evt.preventDefault();
  //   if (this.state.matchup.length < 2) {
  //     this.setState({ matchup: [...this.state.matchup, { player }] });
  //   }
  //   if (this.state.matchup.length === 2) {
  //     const arr = [...this.state.matchup, { player }];
  //     const newArr = arr.pop();
  //     this.setState({ matchup: [newArr] });
  //   }

    
  // };

  // handleReset = evt => {
  //   evt.preventDefault();
  //   this.setState({
  //     matchup: []
  //   });
  // };

  // getData = () => {
  //   axios.get("https://basketball-era.herokuapp.com").then(res => {
  //     this.setState({
  //       players: res.data
  //     });
  //   });
  // };

  // componentDidMount() {
  //   this.getData();
  // }

  render() {
    return (
      <div className="App">
        <nav className="topnav">
          <img className="logo" src={logo} alt="logo" />
          <a className="active" href="/">
            Home
          </a>
          <a href="/compare">ONExONE</a>
          <a href="/create">Add Players</a>
          <a href="/update">Update Player</a>
          <a href="/delete">Delete Player</a>
        {/* <Search
          handleClick={this.handleClick}
          players={this.state.players}
          className="searchContainer"
        /> */}
        </nav>
        <main>
          <Route path="/" exact render={routerProps => <Home />} />
          <Route
            path="/compare"
            exact
            render={routerProps => (
              <Comparison
                // handleReset={this.handleReset}
                // matchup={this.state.matchup}
                // players={this.state.players}
                // handleClick={this.handleClick}
                
              />
            )}
          />
          <Route path="/create" exact render={() => <Create />} />
          <Route path="/delete" exact render={() => <Delete />} />
          <Route path="/update" exact render={() => <Update />} />
        </main>
      </div>
    );
  }
}

export default App;
