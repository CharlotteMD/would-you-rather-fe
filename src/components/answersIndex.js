import React, { Component } from 'react';
// import logo from './logo.svg';
import Axios from 'axios';
import '../App.css';

class AnswersIndex extends Component {
  constructor() {
    super();
    this.state = {
      answers: [{
        id: '',
        questionid: '',
        choice: '',
        addedby: ''
      }]
    };
  }


  componentDidMount() {
    // var self = this;
    Axios
      .get('/answers')
      .then((response) => {
        console.log(response.data);
        this.setState({ answers: response.data.data })
        console.log('state: '+ this.state.answers);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="AnswersIndex">

        <h1>Important Answers of the Universe</h1>

        { this.state.answers.map((answer, i) => {
          return (<div key={i} className="answerQuestion">
            <p>{`I am ${answer.addedby}`}</p>
          </div>)
        })}

      </div>
    );
  }
}

export default AnswersIndex;
