import React, { Component } from "react";
import {Button} from '@material-ui/core/';

class Feeling extends Component {
    state ={
        feeling:''
    } //end state

    componentDidMount(){
        console.log('in feeling')
    } // end componentDidMount 

    handleClick = () => {
        console.log('clicked next in feeling');
        if(this.state.feeling === ''){
            alert('Please choose a value from 1-5, then press Next. Thank you');
            // do this thing
            } else if (this.state.feeling > 0){
            this.props.dispatch({
                type: 'NEW_FEELING',
                payload: this.state.feeling,
            }) 
            this.props.history.push('/understanding') 
        }
      }//end handle click

    handleChange = (event) =>{
        console.log('in handleChangeFor feeling');
        this.setState({
            feeling: event.target.value,
        })

    }// end handleChangeFor



    render() {
        console.log('feeling score is:', this.state.feeling);
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <br/>
                <select value={this.state.feeling} onChange={this.handleChange}>
                    <option value="">Feeling?</option>
                    <option value="5">Excellent</option>
                    <option value="4">Very Good</option>
                    <option value="3">Good</option>
                    <option value="2">Fair</option>
                    <option value="1">Poor</option>
                </select>
                <br/>
                <br/>
                <Button variant="outlined" color="primary" onClick={this.handleClick}>Next</Button>
            </div>
        ) //end return
    } //end render
} //end class

export default Feeling;