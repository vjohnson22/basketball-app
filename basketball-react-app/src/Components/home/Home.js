import React, { Component } from "react";
import "./Home.css"
import video from "./NBAmix.mp4";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <video id="video" width="1200" height="-890" loop muted autoPlay>
            <source src={video} type="video/mp4" />
          </video>
         </div>  
        <div className="container">
          <h1>Press ONEXONE Above to Compare Superstars</h1>
        </div>      
      </div>
      )
    }
  }

export default Home;
