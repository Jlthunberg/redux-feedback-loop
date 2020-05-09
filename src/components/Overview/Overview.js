import React, { Component } from "react";


class Overview extends Component{
    render(){
        return(
            <div>
                <h1>Overview</h1>
                <p>This should display the answers form the previous pages</p>
                <ul>
                    <li>This should display feeling answer</li>
                    <li>This should display understanding answer</li>
                    <li>This should display support answer</li>
                    <li>This should display comments answer</li>
                </ul>
            </div>
        ) //end return
    } //end render
} //end class

export default Overview;