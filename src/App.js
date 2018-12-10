import React, { Component } from 'react';
// import logo from './logo.svg';
import Axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    questions: ''
   };

  componentDidMount() {
    Axios
      .get('/questions')
      .then(res => this.setState({ questions: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1>Questions</h1>
        </header>

        <div className="questions">

          <p>{this.state.questions[0]}</p>
        </div>

      </div>
    );
  }
}

export default App;
