import React, { Component } from "react";

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
        // this.props.dispatch({
        //     type: 'NEW_FEELING',
        //     payload: this.state.feeling,
        // }) 

        // this.props.history.push('/understanding') //sends to next page understanding question
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

                <label>Feeling?</label> <br/>
                <select value={this.state.feeling} onChange={this.handleChange}>
                    <option value="">Feeling?</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>

                <br/>
                <button onClick={this.handleClick}>Next</button>
            </div>
        ) //end return
    } //end render
} //end class

export default Feeling;