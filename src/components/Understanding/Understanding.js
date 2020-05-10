import React, { Component } from "react";


class Understanding extends Component{

    state ={
        understanding: ''
    }

    componentDidMount(){
        console.log('in understanding')
    } // end componentDidMount 

    handleClick = () => {
        console.log('clicked next in understanding')
        // if(this.state.understanding == ''){
        //     //do this thing
        //     this.props.dispatch({
        //         type: 'NEW_UNDERSTANDING',
        //         payload: this.state.understanding,
        //     })  
        // }

        this.props.dispatch({
            type: 'NEW_UNDERSTANDING',
            payload: this.state.understanding,
        })

        this.props.history.push('/support')
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
                <label>Understanding?</label> <br/>
                <select value={this.state.understanding} onChange={this.handleChange}>
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

export default Understanding;