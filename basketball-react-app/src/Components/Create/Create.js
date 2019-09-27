import React, {Component} from 'react'
import Axios from 'axios';
import './Create.css'

class Create extends Component {
    constructor(){
        super()

        this.state = {
            name: "",
	        ppg: "",
	        apg : "",
	        rpg : "",
	        spg : "",
	        bpg : "",
	        startYear:"",
	        endYear: "",
	        image : ""
	    }

    }
    handleName= (e) => {
        this.setState({name:`${e.target.value}`})
    }
    handlePpg= (e) => {
        this.setState({ppg:`${e.target.value}`})
    }
    handleApg= (e) => {
        this.setState({apg:`${e.target.value}`})
    }
    handleRpg= (e) => {
        this.setState({rpg:`${e.target.value}`})
    }
    handleSpg= (e) => {
        this.setState({spg:`${e.target.value}`})
    }
    handleBpg= (e) => {
        this.setState({bpg:`${e.target.value}`})
    }
    handleStartYear= (e) => {
        this.setState({startYear:`${e.target.value}`})
    }
    handleEndYear= (e) => {
        this.setState({endYear:`${e.target.value}`})
    }
    handleImage= (e) => {
        this.setState({image:`${e.target.value}`})
    }
    handleSubmit =(e) => {
        e.preventDefault()
        let body = this.state
        Axios.post(`https://basketball-era.herokuapp.com/`,body)
            .then(res => {
                alert(`${this.state.name} added to the database`)
            })
            .catch(err => {
                alert("There was an error, please try again later")
            })
            .finally(this.setState({
                name: "",
                ppg: "",
                apg : "",
                rpg : "",
                spg : "",
                bpg : "",
                startYear:"",
                endYear: "",
                image : ""
            }))
    }

    render(){
        return(
        <div className='body'>
        <div className="addContainer">
            <h1>Add Player</h1>
                <div></div>
                
                    <h2>Player Name: </h2>
                    <input name='name' placeholder="Player Name" value ={this.state.name} onChange = {this.handleName}></input>
                
                
                    <h2>Career Points Per Game: </h2>
                    <input name='ppg' placeholder="Points Per Game" value ={this.state.ppg} onChange = {this.handlePpg}></input>
                               
                    <h2>Career Assists Per Game: </h2>
                    <input name='apg' placeholder="Assists Per Game" value ={this.state.apg} onChange = {this.handleApg}></input>
                
                    <h2>Career Rebounds Per Game: </h2>
                    <input name='rpg' placeholder="Rebounds Per Game" value ={this.state.rpg} onChange = {this.handleRpg}></input>
                
                
                    <h2>Career Steals Per Game: </h2>
                    <input name='spg' placeholder="Steals Per Game" value ={this.state.spg} onChange = {this.handleSpg}></input>
                               
                    <h2>Career Blocks Per Game: </h2>
                    <input name='bpg' placeholder="Blocks Per Game" value ={this.state.bpg} onChange = {this.handleBpg}></input>
                
                
                    <h2>Rookie Season: </h2>
                    <input name='startYear' placeholder="Start Year" value ={this.state.startYear} onChange = {this.handleStartYear}></input>
                
                    <h2>Final Season: </h2>
                    <input name='endYear' placeholder="Last Year in League" value ={this.state.endYear} onChange = {this.handleEndYear}></input>
                
                
                    <h2>Player Image Url: </h2>
                    <input name='image' placeholder="Image URL" value ={this.state.image} onChange = {this.handleImage}></input>
                 
                <button onClick= {this.handleSubmit}>Submit</button>
            

        </div>
        </div>        
        )
    }
}

export default Create