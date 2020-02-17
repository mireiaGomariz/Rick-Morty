import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class Game2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      characterOne : [],
      characterTwo : [],
      currentIndex: 0,
      imageClicked: false,
      randomName: 1,
      randomNumCharOne: Math.floor(Math.random() * 350) + 1,
      randomNumCharTwo: Math.floor(Math.random() * 350) + 1,
      points: 0,
      answer:"",
      attemptsCounter: 10,
    }
  }


  componentDidMount() {
    fetch(`https://rickandmortyapi.com/api/character/${this.state.randomNumCharOne},${this.state.randomNumCharTwo}`)
      .then(res => res.json())
      .then(json => {

          this.setState ({
            isLoaded: true,
            characterOne: json[0],
            characterTwo: json[1],
            randomName: Math.floor(Math.random() * 2) + 1,
            randomNumCharOne: Math.floor(Math.random() * 350) + 1,
            randomNumCharTwo: Math.floor(Math.random() * 350) + 1,
          })
      });
  }

  checkIfCorrect = event => {

    let characterName = document.getElementById('select-character');
    if (event.target.alt === characterName.textContent) {

      this.setState({
        answer: "Correcte",
        imageClicked: true,
        points: this.state.points + 1,
        attemptsCounter: this.state.attemptsCounter -1,
      })
    }else{
      this.setState({
        answer: "Incorrecte",
        imageClicked: true,
        attemptsCounter: this.state.attemptsCounter -1,
      })
    }
    this.componentDidMount();
  }

  tryAgain = event => {
    window.location.reload();
  }


  render() {
    return (
      <div>
        {this.state.attemptsCounter == 0
          ?
          <div>
            <h1>Finish Game </h1>
            <h1>Points: {this.state.points} </h1>
            <Button
              type="button"
              onClick = {this.tryAgain}>
              Try Again</Button>
          </div>
          :
          <div className="container">
            <h2> Characters attempts : {this.state.attemptsCounter}</h2>
            {this.state.randomName == 1
            ?
            <h1 id="select-character" className="mt-5">{this.state.characterOne.name}</h1>
            :
            <h1 id="select-character" className="mt-5">{this.state.characterTwo.name}</h1>
            }
            <div className="row mt-3 justify-content-around">
              <div className="col-md-6 mt-4">
                <img src={this.state.characterOne.image} alt={this.state.characterOne.name} onClick = { this.checkIfCorrect}/>

              </div>
              <div className="col-md-6 mt-4">
                <img src={this.state.characterTwo.image} alt={this.state.characterTwo.name} onClick = { this.checkIfCorrect} />

              </div>
            </div>
            <div className="row">
              <div className="col">
                <h1>Points: {this.state.points} </h1>
              </div>
            </div>
          </div>
        }
      </div>


    )


  }
}

export default Game2