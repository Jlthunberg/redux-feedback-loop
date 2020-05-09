import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <p> Welcome to the daily reflection feedback. There will be 4 questions with
        about how your week went. Please answer each question and continue on to
            the proceeding question by clicking the next button.</p>
            <br/>
            <button>Next</button>
      </div>
    )
  }
}

export default Home;