import React, { Component } from "react";
import {Button} from '@material-ui/core/';
//use in main app to connect
//import Thanks from '../Thanks/Thanks';


class Thanks extends Component{

    handleClick = () => {
        console.log('in handleclick overview')
        this.props.history.push('/')
    } //end handle click


    render(){
        return(
            <div>
                <h1>Thank you for your Feedback!</h1>
                <br/>
                <br/>
                <Button size="small"variant="outlined" color="primary" onClick={this.handleClick}>Submit New Feedback</Button>
            </div>
        ) //end return
    } //end render
} //end class

export default Thanks;