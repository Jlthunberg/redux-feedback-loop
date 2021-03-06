import React, { Component } from "react";
import {Button} from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';

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
        // console.log('comments:', this.state.comments);
        return (
            <div>
                <h1>Any additional comments or concerns can be entered here.</h1>
                <TextField id="standard-basic" label="Comments?" value={this.state.comments} onChange={this.handleChange}/>
                <br/>
                <br/>
                <Button size="small" variant="outlined" color="primary" onClick={this.handleClick}>Next</Button>
            </div>
        ) //end return
    } //end render
} //end class

export default Comments;