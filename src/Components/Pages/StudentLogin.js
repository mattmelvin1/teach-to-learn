import React, { Component } from "react";
import { Button, ButtonToolbar, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Header from "../Elements/Header";

import "../../Styles/Login.css";
export default class StudentLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
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

    handleLogin = event => {
        event.preventDefault();
        this
            .props
            .history
            .push('/classes')

    }
    handleSignUp = event => {
        event.preventDefault();
        this
            .props
            .history
            .push('/')

    }


    render() {
        return (
            <div>
                <Header />
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
                                    .handleLogin
                                    .bind(this)}
                                type="button">Login
                            </Button>
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={this
                                    .handleSignUp
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