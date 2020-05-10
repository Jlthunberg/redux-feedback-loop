import React, { Component } from "react";
import {Button} from '@material-ui/core/';

class Support extends Component {
    state = {
        support: ''
    } //end state


    componentDidMount() {
        console.log('in support')
        this.setState({
            feeling: '5'
        })
    } // end componentDidMount 

    handleClick = () => {
        console.log('clicked next in support')
        if(this.state.support === ''){
            alert('Please choose a value from 1-5, then press Next. Thank you');
            // do this thing
            } else if (this.state.support > 0){
                this.props.dispatch({
                    type: 'NEW_SUPPORT',
                    payload: this.state.support,
                })
                this.props.history.push('/comments')
            }  

        // this.props.history.push('/comments')
    }//end handle click


    handleChange = (event) => {
        console.log('in handleChangeFor support');
        this.setState({
            support: event.target.value,
        })

    }// end handleChangeFor

    render() {
        console.log('support score is:', this.state.support);
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <br/>
                <select value={this.state.support} onChange={this.handleChange}>
                    <option value="">Support?</option>
                    <option value="5">Excellent</option>
                    <option value="4">Very Good</option>
                    <option value="3">Good</option>
                    <option value="2">Fair</option>
                    <option value="1">Poor</option>
                </select>
                <br/>
                <br/>
                <Button size="small" variant="outlined" color="primary" onClick={this.handleClick}>Next</Button>
            </div>
        ) //end return
    } //end render
} //end class

export default Support;