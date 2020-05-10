import React, { Component } from "react";
import {connect} from 'react-redux';



class Overview extends Component{

    //POST route here


    componentDidMount(){
        console.log('in overview')
    } // end componentDidMount 

    handleClick = () => {
        console.log('in handleclick overview')
        this.props.history.push('/thanks')
    } //end handle click

    render(){
        return(
            <div>
                <h1>Overview</h1>
                <p>Overview of Answers</p>
                <ul>
                    <li>This should display feeling answer: {this.props.reduxState.feeling}</li>
                    <li>This should display understanding answer:{this.props.reduxState.understanding}</li>
                    <li>This should display support answer:{this.props.reduxState.support}</li>
                    <li>This should display comments answer:{this.props.reduxState.comments}</li>
                </ul>
                <br/>
                <button onClick={this.handleClick}>SUBMIT</button>
                {/* {JSON.stringify(this.props.reduxState.feeling)} */}
                {/* {JSON.stringify(this.mainReducer.feeling)} */}
            </div>
        ) //end return
    } //end render
} //end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Overview);