# To do

## Steps to setup React & REDUX by Lamport
[ ] Set up React and REDUX folders    
[ ] npx create-react-app FOLDERNAME
[ ] cd into FOLDERNAME in Terminal
[ ] npm install redux react-redux
[ ] Create Component & Apps folder, Move App.js & App.css into Apps folder
[ ] Ensure path to Apps.js is still valid in index.js
[ ] npm start, ensure page is loading
[ ] Optional - Modify vh of App.css to 12vh from 100vh
[ ] Import REDUX into React Project
[ ] In index.js, add the following: 
[ ] import { createStore } from 'redux';
[ ] import { Provider } from 'react-redux'; 
[ ] Create firstReducer function: //this can be named anything you want
```const firstReducer = () =>{
console.log('in firstReducer');
return {};}```
[ ] Create storeInstance function:
```const storeInstance = createStore (firstReducer);```
[ ] Instruct <App /> to utilize Provider:
```<Provider store={ storeInstance }><App /></Provider>```
[ ] In App.js, add the following:
[ ] Modify function App to become a class App as shown:
```class App extends React.Component{```
[ ] Import the connect feature from react-redux:
```import { connect } from 'react-redux';```
[ ] Modify the export:
```export default connect()(App);```
[ ] Check this.props in componentDidMount:
```componentDidMount(){
console.log('in componentDidMount', this.props)}```
[ ] To check if dispatch works, create a means to use this.props.dispatch, example:
[ ] BUTTON:     <button onClick={this.clickHandler}>Click Me</button>
[ ] FUNCTION:   clickHandler = () => {
console.log('in clickHandler');
this.props.dispatch({type: 'click'});}
[ ] Set up putReduxStateOnProps at the bottom of App.js
[ ] Create new function putReduxStateOnProps:
const putReduxStateOnProps = ( reduxState ) => ( { reduxState} );
[ ] Modify the export 
export default connect( putReduxStateOnProps )(App);
[ ] Within index.js, make the following changes:
[ ] Set up initial state using:
const firstReducerInitialState = 0;
[ ] Add a state and action into firstReducer, example:
const firstReducer = (state = firstReducerInitialState, action) => {}


