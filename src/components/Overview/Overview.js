import React, { Component } from "react";
import {connect} from 'react-redux';
import axios from 'axios';
import {Button} from '@material-ui/core/';



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

    updateFeedback = (event) => {
        if(event === "feeling"){
            this.props.history.push('/feeling')
        }
        else if (event === "understanding") {
            this.props.history.push('/understanding')
        }
        else if (event === "support") {
            this.props.history.push('/support')
        }
        else if (event === "comments") {
            this.props.history.push('/comments')
        }
    } //end updateFeedback

    render(){
        return(
            <div>
                <h1>Review Your Feedback</h1>
                {/* <p> Rating 5= Excellent, 4= Very Good, 3= Good, 2= Fair, 1= Poor.</p> */}
                <p>If you would like to change your rating please click the "Update" button to go back to that screen.</p>
                
                    <p>Feeling: {this.props.reduxState.feeling} <Button size="small" variant="outlined" color="secondary" onClick={() => this.updateFeedback('feeling')}>Update</Button></p>
                    <p>Understanding: {this.props.reduxState.understanding} <Button size="small" variant="outlined" color="secondary" onClick={() => this.updateFeedback('understanding')}>Update</Button></p>
                    <p>Support: {this.props.reduxState.support} <Button size="small" variant="outlined" color="secondary" onClick={() => this.updateFeedback('support')}>Update</Button></p>
                    <p>Comments: {this.props.reduxState.comments} <Button size="small" variant="outlined" color="secondary" onClick={() => this.updateFeedback('comments')}>Update</Button></p>
                <br/>
                <br/>
                <Button size="small" variant="outlined" color="primary" onClick={this.handleClick}>SUBMIT</Button>
            </div>
        ) //end return
    } //end render
} //end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Overview);