import React, { Component } from "react";

class Feeling extends Component {
    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>

                <label>Feeling?</label> <br />
                <select id="feeling">
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
                
                <br/>
                <button>NEXT</button>
            </div>
        ) //end return
    } //end render
} //end class

export default Feeling;