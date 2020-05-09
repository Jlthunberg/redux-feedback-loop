import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Overview from '../Overview/Overview';
import { HashRouter, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount(){
    console.log('in mount:')
  }//end handle click



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
        <HashRouter>
          <Route exact path="/" render={ (props) => <Home {...props} dispatch={this.props.dispatch}/>} />
          <Route path="/feeling" render={ (props) => <Feeling {...props} dispatch={this.props.dispatch}/>} />
          <Route path="/understanding" render={ (props) => <Understanding {...props} dispatch={this.props.dispatch}/>} />
          <Route path="/support" render={ (props) => <Support {...props} dispatch={this.props.dispatch}/>} />
          <Route path="/comments" render={ (props) => <Comments {...props} dispatch={this.props.dispatch}/>} />
          <Route path="/overview" render={ (props) => <Overview {...props} dispatch={this.props.dispatch}/>} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
