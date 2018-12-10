import React, { Component } from 'react';
// import logo from './logo.svg';
import Axios from 'axios';
import '../App.css';

class QuestionsIndex extends Component {
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
        console.log('state: '+ this.state.questions);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="QuestionsIndex">

        <h1>Important Questions of the Universe</h1>

        { this.state.questions.map((question, i) => {
          return (<div key={i} className="askQuestion">
            <p>{`Would you rather ${question.rathera} or ${question.ratherb}?`}</p>
          </div>)
        })}

      </div>
    );
  }
}

export default QuestionsIndex;
