import React, { Component } from 'react';
import {Button} from '@material-ui/core/';
// import {MuiThemeProvider} from '@material-ui/core/';

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
        <p className="lineHeight"> Welcome to the daily reflection feedback. There will be 4 questions with
        about how your week went, please answer with the drop down menu in each question. You can then continue on to
            the proceeding question by clicking the "Next" button.</p>
        <br />
        <Button variant="outlined" color="primary" onClick={this.handleClick}>Next</Button>
      </div>
    )
  }
}

export default Home;