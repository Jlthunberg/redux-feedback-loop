import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


import {createStore} from 'redux';
import { Provider} from 'react-redux';


const firstReducerInitialState = 0;

const firstReducer = ( state = firstReducerInitialState, action) => {
  console.log('in firstReducer', 'state:', state, 'action:', action);
 
} // end firstReducer

//create a storage space for redux data, tell it to use our reducer
const storeInstance = createStore( firstReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
