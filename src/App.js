import React, { Component } from 'react';
// import { Switch, Route, Router } from 'react-router-dom';
// import logo from './logo.svg';
// import Axios from 'axios';
import './App.css';

import QuestionsIndex from './components/questionsIndex';
import AnswersIndex from './components/answersIndex';

class App extends Component {

  render() {
    return (
      <div className="App">

          <header className="App-header">
            <h1>Would you rather?</h1>
          </header>

          <QuestionsIndex />
          <AnswersIndex />

      </div>


    );
  }
}

export default App;
