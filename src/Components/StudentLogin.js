import React from "react";

import {Button, Form, FormGroup, FormControl, ControlLabel} from "react-bootstrap";


export default class StudentLogin extends React.Component {

    render() {
        return (
            console.log ("in the studentlogin")
            <div>
                 <div className="Login">
                    <Form>
                        <FormGroup controlId="formBasicEmail">
                            <ControlLabel>Email</ControlLabel>
                            <FormControl type="email" placeholder="Enter email"/>
                        </FormGroup>

                        <FormGroup controlId="formBasicPassword">
                            <ControlLabel>Quiz Number</ControlLabel>
                            <FormControl type="Quiz Number" placeholder="Enter quiz number"/>
                        </FormGroup>
                        <Button block bsSize="large" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}