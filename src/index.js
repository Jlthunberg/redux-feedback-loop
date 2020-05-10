import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const mainReducer = (state = 0, action) => {
  console.log('in mainReducer', 'state:', state, 'action:', action);
  if (action.type === 'NEW_FEELING') {
    return { ...state, feeling: action.payload }
  }
  else if (action.type === 'NEW_UNDERSTANDING') {
    return { ...state, understanding: action.payload }
  }
  else if (action.type === 'NEW_SUPPORT') {
    return { ...state, support: action.payload }
  }
  else if (action.type === 'NEW_COMMENT') {
    return { ...state, comments: action.payload }
  }
  return state;

} // end mainReducer

const storeInstance = createStore(mainReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
registerServiceWorker();