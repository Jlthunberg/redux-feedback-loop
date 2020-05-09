import React, { Component } from "react";


class Overview extends Component{

    componentDidMount(){
        console.log('in overview')
    } // end componentDidMount 

    render(){
        return(
            <div>
                <h1>Overview</h1>
                <p>Your questions and answers should be here with option to submit or start over</p>
                <ul>
                    <li>This should display feeling answer</li>
                    <li>This should display understanding answer</li>
                    <li>This should display support answer</li>
                    <li>This should display comments answer</li>
                </ul>
                <br/>
                <button>SUBMIT</button>
            </div>
        ) //end return
    } //end render
} //end class

export default Overview;