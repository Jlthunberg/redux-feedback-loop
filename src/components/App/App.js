import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Overview from '../Overview/Overview';
import Thanks from '../Thanks/Thanks';
import Admin from '../Admin/Admin';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {

  state = {
    feedbackList: []
  }

  getFeedbackList() {
    console.log('in GET feedback')
    axios.get('/feedback/admin')
      .then((response) => {
        console.log('Back from GET feedback:', response.data);
        this.setState({
          feedbackList: response.data
        })
      })
      .catch((error) => {
        console.log('error with POST: ', error);
        alert('cannot get admin feedback. Sorry, try again later.')
      })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
        <HashRouter>
          <Route exact path="/" render={(props) => <Home {...props} dispatch={this.props.dispatch} />} />
          <Route path="/feeling" render={(props) => <Feeling {...props} dispatch={this.props.dispatch} />} />
          <Route path="/understanding" render={(props) => <Understanding {...props} dispatch={this.props.dispatch} />} />
          <Route path="/support" render={(props) => <Support {...props} dispatch={this.props.dispatch} />} />
          <Route path="/comments" render={(props) => <Comments {...props} dispatch={this.props.dispatch} />} />
          <Route path="/overview" render={(props) => <Overview {...props} dispatch={this.props.dispatch} reduxState={this.props.reduxState} />} />
          <Route path="/thanks" render={(props) => <Thanks {...props} dispatch={this.props.dispatch} />} />
          <Route path="/admin" render={(props) => <Admin {...props} feedbackList={this.getFeedbackList} feedback={this.state.feedbackList} dispatch={this.props.dispatch} reduxState={this.props.reduxState} />} />
        </HashRouter>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(App);
// export default App;
