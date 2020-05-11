import React, { Component } from "react";
import {Button} from '@material-ui/core/';
// import axios from 'axios';



class Admin extends Component{

    componentDidMount(){
        console.log('in mount');
        this.props.feedbackList();
    }

    handleClick = () =>{
        console.log('in handleClick admin');
        this.props.history.push('/')
    }


    render(){
        return(
            <div>
                <h1>Welcome to Admin</h1>
            

                {/* <p align='center'>Right now I only append to "http://localhost:5000/feedback/admin", try again later and my link may be working.</p> */}

                <Button size="small"variant="outlined" color="primary" onClick={this.handleClick}>Leave Admin</Button>

            </div>
        ) //end return
    } //end render
} //end class

export default Admin;