import React, { Component } from "react";
import {Button} from '@material-ui/core/';


class Understanding extends Component{

    state ={
        understanding: ''
    }

    componentDidMount(){
        console.log('in understanding')
    } // end componentDidMount 

    handleClick = () => {
        console.log('clicked next in understanding')
        if(this.state.understanding === ''){
            alert('Please choose a value from 1-5, then press Next. Thank you');
            // do this thing
            } else if (this.state.understanding > 0){
                this.props.dispatch({
                    type: 'NEW_UNDERSTANDING',
                    payload: this.state.understanding,
                })
                this.props.history.push('/support')
            }  

      }//end handle click


    handleChange = (event) =>{
        console.log('in handleChangeFor understanding');
        this.setState({
            understanding: event.target.value,
        })

    }// end handleChangeFor


    render(){
        console.log('understanding score is:', this.state.understanding)
        return(
            <div>
                <h1>How well are you understanding the content?</h1>
                <br/>
                <select value={this.state.understanding} onChange={this.handleChange}>
                    <option value="">Understanding?</option>
                    <option value="5">Poor</option>
                    <option value="4">Fair</option>
                    <option value="3">Good</option>
                    <option value="2">Very Good</option>
                    <option value="1">Excellent</option>
                </select>
                <br/>
                <br/>
                <Button variant="outlined" color="primary" onClick={this.handleClick}>Next</Button>

            </div>
        ) //end return
    } //end render
} //end class

export default Understanding;