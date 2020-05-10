import React, { Component } from "react";
import {connect} from 'react-redux';
import axios from 'axios';



class Overview extends Component{

    componentDidMount(){
        console.log('in overview')
    } // end componentDidMount 

    //POST route here
    handleClick = () => {
        console.log('in handleclick overview')
        axios.post('/feedback', this.props.reduxState)
        .then(() => {
            console.log('Submitted feedback: ', this.props.reduxState);
        })
        .catch((error) => {
            console.log('error with POST: ', error);
            alert('Feedback cannot be submitted. Sorry, try again later.')
        })
        this.props.history.push('/thanks')
    } //end handle click

    render(){
        return(
            <div>
                <h1>Review Your Feedback</h1>
                
                    <p>Feeling: {this.props.reduxState.feeling}</p>
                    <p>Understanding:{this.props.reduxState.understanding}</p>
                    <p>Support:{this.props.reduxState.support}</p>
                    <p>Comments:{this.props.reduxState.comments}</p>
                <br/>
                <button onClick={this.handleClick}>SUBMIT</button>
            </div>
        ) //end return
    } //end render
} //end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Overview);