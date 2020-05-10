import React, { Component } from 'react';
import {Button} from '@material-ui/core/';
// import { Typography } from '@material-ui/core/';
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
        <p align='center'> Welcome to the daily reflection feedback. There will be 3 questions
        about how your week went and a comment section. Please answer with the drop down menu in each page. You can then continue on to
            the proceeding question by clicking the "Next" button.</p>
            <p> The rating scale is as follows: 5= Excellent, 4= Very Good, 3= Good, 2= Fair, 1= Poor.</p>
        <br />
        <Button size="small" variant="outlined" color="primary" onClick={this.handleClick}>Next</Button>
      </div>
    )
  }
}

export default Home;