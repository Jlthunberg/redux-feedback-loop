import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


import { createStore } from 'redux';
import { Provider } from 'react-redux';

const mainReducerInitialState = 0;

const mainReducer = (state = mainReducerInitialState, action) => {
  console.log('in mainReducer', 'state:', state, 'action:', action);
  if (action.type === 'NEW_FEELING') {
    console.log('main reducer with', action.type, state)
    return { ...state, feeling: action.payload }
  }
  else if (action.type === 'NEW_UNDERSTANDING') {
    console.log('main reducer with', action.type, state)
    return { ...state, understanding: action.payload }
  }
  else if (action.type === 'NEW_SUPPORT') {
    console.log('main reducer with', action.type, state)
    return { ...state, support: action.payload }
  }
  else if (action.type === 'NEW_COMMENT') {
    console.log('main reducer with', action.type, state)
    return { ...state, comments: action.payload }
  }
  return state;

} // end mainReducer

const storeInstance = createStore(mainReducer);
// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();
