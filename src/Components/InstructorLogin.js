import React, { Component } from "react";
import { Button, ButtonToolbar, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Home from "./Home";

import "../Styles/Login.css";
export default class TeacherLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            showStudentButton: true,
            showTeacherButton: true
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    _handleLogin = event => {
        event.preventDefault();
        this
            .props
            .history
            .push('/classes')

    }
    _handleSignUp = event => {
        event.preventDefault();
        this
            .props
            .history
            .push('/')

    }


    render() {
        return (
            <div>
                <Home />                
                <div className="LoginForm">
                    <form >
                        <FormGroup controlId="email" bsSize="large">
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                autoFocus
                                type="email"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                placeholder="Enter password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password" />
                        </FormGroup>

                        <ButtonToolbar className="pull-right">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={this
                                    ._handleLogin
                                    .bind(this)}
                                type="button">Login
                            </Button>
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={this
                                    ._handleSignUp
                                    .bind(this)}
                                type="button">Sign Up
                            </Button>
                        </ButtonToolbar>                   
                    </form>
                </div>
            </div>
        );
    }
}