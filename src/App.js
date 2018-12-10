import React, { Component } from 'react';
// import logo from './logo.svg';
import Axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: [{
        id: '',
        rathera: '',
        ratherb: '',
        createdBy: ''
      }]
    };
  }


  componentDidMount() {
    // var self = this;
    Axios
      .get('/questions')
      .then((response) => {
        console.log(response.data);
        this.setState({ questions: response.data.data })
        // console.log('state: '+ this.state.questions);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1>Questions</h1>
        </header>



        { this.state.questions.map((question, i) => {
          return <p>{question.rathera}</p>
        })}


      </div>
    );
  }
}

export default App;
