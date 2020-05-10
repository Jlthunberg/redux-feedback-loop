import React, { Component } from "react";
import {Button} from '@material-ui/core/';
// import axios from 'axios';



class Admin extends Component{

    state = {
        feedbackList: [],

      }
    handleClick = () =>{
        console.log('in handleclick admin')
        // axios.get('/feedback')
        // .then((response) => {
        //     console.log('Back from GET feedback:', response.data);
        //     this.setState({
        //         feedbackList: response.data
        //       })
        // })
        // .catch((error) => {
        //     console.log('error with POST: ', error);
        //     alert('cannot get admin feedback. Sorry, try again later.')
        // })
    }

    render(){
        return(
            <div>
                <h1>Welcome to Admin</h1>

                {/* {JSON.stringify(response.data)} */}

                <p align='center'>Right now I only append to "http://localhost:5000/feedback", try again later and my link may be working.</p>

                <Button size="small"variant="outlined" color="primary" onClick={this.handleClick}>Get Feedback</Button>

            </div>
        ) //end return
    } //end render
} //end class

export default Admin;