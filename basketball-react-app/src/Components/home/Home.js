import React, { Component } from "react";
import {Route, Link} from "react-router-dom";
import "./Home.css"

import video from "./NBAmix.mp4";

class Home extends Component {
  render() {
     return (
     
<div className="container">
  
    <video id="video" width="1200" height="-890" loop muted autoPlay>
        <source src={video} type="video/mp4" />
    </video>

</div>
   
      );
    }
  }

export default Home;
