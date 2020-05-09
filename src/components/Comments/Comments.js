import React, { Component } from "react";
// import { render } from 'react-dom';


class Comments extends Component{
    render(){
        return(
            <div>
                <h1>Any comments you want to leave?</h1>
                <p>Comments</p>
                <input type="text" />
            </div>
        ) //end return
    } //end render
} //end class

export default Comments;