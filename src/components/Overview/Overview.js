import React, { Component } from "react";
import {connect} from 'react-redux';



class Overview extends Component{

    //POST route here


    componentDidMount(){
        console.log('in overview')
    } // end componentDidMount 

    render(){
        return(
            <div>
                <h1>Overview</h1>
                <p>Your questions and answers should be here with option to submit or start over</p>
                <ul>
                    <li>This should display feeling answer:</li>

                    <li>This should display understanding answer:</li>
                    <li>This should display support answer:</li>
                    <li>This should display comments answer:</li>
                </ul>
                <br/>
                <button>SUBMIT</button>
                {/* {JSON.stringify(this.props.mainReducer.feeling)} */}
            </div>
        ) //end return
    } //end render
} //end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Overview);