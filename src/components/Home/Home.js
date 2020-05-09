import React, { Component } from 'react';


class Home extends Component {

  componentDidMount() {
    console.log('in home')
  } // end componentDidMount 


  handleClick = () => {
    console.log('clicked next in home')
    this.props.history.push('/feeling')
  }//end handle click


  render() {
    return (
      <div>
        <p> Welcome to the daily reflection feedback. There will be 4 questions with
        about how your week went. Please answer each question and continue on to
            the proceeding question by clicking the next button.</p>
        <br />
        <button onClick={this.handleClick}>Next</button>
      </div>
    )
  }
}

export default Home;