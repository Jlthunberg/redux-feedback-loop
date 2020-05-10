import React, { Component } from "react";
import {Button} from '@material-ui/core/';

class Comments extends Component {
    state ={
        comments: ''
    }

    componentDidMount(){
        console.log('in comments')
    }// end componentDidMount 

    handleChange = (event) => {
        console.log('handleChange comments');
        this.setState({
            comments: event.target.value,
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'NEW_COMMENT',
            payload: this.state.comments,
        })
        
        this.props.history.push('/overview')
    } //end handle click

    render() {
        console.log('comments:', this.state.comments);
        return (
            <div>
                <h1>Any additional comments or concerns can be entered here.</h1>
                <p>Comments(if you do not have any please write "none")</p>
                <input type="text" value={this.state.comments} onChange={this.handleChange}/>
                <br/>
                <br/>
                <Button variant="outlined" color="primary" onClick={this.handleClick}>Next</Button>
            </div>
        ) //end return
    } //end render
} //end class

export default Comments;