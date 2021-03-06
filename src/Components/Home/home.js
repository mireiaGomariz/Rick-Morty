import React , { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';



let audio = new Audio("https://freesound.org/data/previews/456/456032_1511977-lq.mp3")

const start = () => {
  audio.play()
}


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {username: this.props.username}
  }



  render() {
    return (
    <div className="home-menu">
      <div className="container">
            <h3 className="homewelcome"> WELCOME </h3>
            <h1 className="namewel">{this.state.username}</h1>
      </div>
        <div className="homeContainer">
            <Link to="/instructions1" style={{ textDecoration: 'none'}}>
              <img className="grilla1"
                onClick={start}
               src="https://media.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif" alt=""></img>
              <p className="textGame1">Game I</p>
            </Link>

            <Link to="/instructions2" style={{ textDecoration: 'none'}}>
              <img
              onClick={start}
              className="grilla2" src="https://media.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif" alt=""></img>
              <p className="textGame2">Game II</p>
            </Link>

        </div>
      </div>
    )
  }
}

export default Home
