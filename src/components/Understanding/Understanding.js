import React, { Component } from "react";


class Understanding extends Component{
    render(){
        return(
            <div>
                <h1>How well are you understanding the content?</h1>
                <label>Understanding?</label> <br/>
                <select id="understanding">
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>

            </div>
        ) //end return
    } //end render
} //end class

export default Understanding;