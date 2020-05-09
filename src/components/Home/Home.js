import React, {Component} from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';

class Home extends Component {
  render() {
    return (
      <div>
        <p> Welcome to the daily reflection feedback. There will be 4 questions with 
            about how your week went. Please answer each question and continue on to 
            the proceeding question by clicking the next button.</p>

        <HashRouter>
        <Link to="/feeling">Next</Link>
        <Route path="/feeling" component={Feeling} />
        </HashRouter>
      </div>
    )
  }
}

export default Home;