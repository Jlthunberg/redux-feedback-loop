import React, { Component } from "react";
import { Button } from '@material-ui/core/';
// import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



class Admin extends Component {

    state = {
        feedbackList: [],

    }
    handleClick = () => {
        console.log('in handleclick admin')
        // axios.get('/feedback')
        // .then((response) => {
        //     console.log('Back from GET feedback:', response.data);
        //     this.setState({
        //         feedbackList: response.data
        //       })
        // })
        // .catch((error) => {
        //     console.log('error with POST: ', error);
        //     alert('cannot get admin feedback. Sorry, try again later.')
        // })
    }

    render() {
        return (
            <div>
                <h1>Welcome to Admin</h1>

                {/* {JSON.stringify(response.data)} */}

                <p align='center'>Right now I only append to "http://localhost:5000/feedback", try again later and my link may be working.</p>

                <Button size="small" variant="outlined" color="primary" onClick={this.handleClick}>Get Feedback</Button>

                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>New Feedback)</TableCell>
                                <TableCell align="right">Feeling</TableCell>
                                <TableCell align="right">Support&nbsp;</TableCell>
                                <TableCell align="right">Understanding&nbsp;</TableCell>
                                <TableCell align="right">Comments&nbsp;</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.feeling}</TableCell>
              <TableCell align="right">{row.support}</TableCell>
              <TableCell align="right">{row.understanding}</TableCell>
              <TableCell align="right">{row.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
                    </Table>
                </TableContainer>

            </div>
        ) //end return
    } //end render
} //end class

export default Admin;