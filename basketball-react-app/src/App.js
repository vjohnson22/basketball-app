import React, { Component } from "react";
import axios from "axios";
import Search from "./Components/Search";
import Comparison from "./Components/Comparison";
import Home from "./Components/Home/Home";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Create from "./Components/Create/Create";
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
  
  

  render() {
    return (
      <div className="App">
          <nav className="topnav">
            <Link to='/compare' className="active" ><img className="logo" src={logo} alt="logo" /></Link>
            <Link to='/' className="active" >Home</Link>
            <Link to="/compare">ONExONE</Link>
            <Link to="/create">Add Players</Link>
            <Link to="/update">Update Player</Link>
            <Link to="/delete">Delete Player</Link>
          </nav>
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/compare" exact component={Comparison}/>     
            <Route path="/create" exact component={Create} />
            <Route path="/delete" exact component= {Delete} />
            <Route path="/update" exact component ={Update} />
        </main>
      </div>
    );
  }
}

export default App;
