import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home'
// import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import { HashRouter, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
        {/* <Feeling />
        <Understanding />
        <Support />
        <Comments /> */}
        <HashRouter>
          <Link to="/">Home</Link>
          {/* <Link to="/feeling">Feeling</Link>  */}
          <Link to="/understanding">Understanding</Link>  
          <Link to="/support">Support</Link>
          <Link to="/comments">Comments</Link>

          <Route path="/" component={Home} />
          {/* <Route path="/feeling" component={Feeling} /> */}
          <Route path="/Understanding" component={Understanding} />
          <Route path="/support" component={Support} />
          <Route path="/Comments" component={Comments} />


        </HashRouter>
      </div>
    );
  }
}

export default App;
