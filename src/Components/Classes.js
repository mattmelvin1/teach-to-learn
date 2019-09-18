import React from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import "../Styles/Button.css";


export default class Classes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showStudentButton: false,
            showTeacherButton: false
        };
    }

    _handleSubmit = event => {
        console.log("handle submit");
        event.preventDefault();
        this
            .props
            .history
            .push('/class-administration')

    }

    _handleAddClass = event => {
        event.preventDefault();
        this
            .props
            .history
            .push('/classes')

    }

    _handleDeleteClass = event => {
        event.preventDefault();
        this
            .props
            .history
            .push('/classes')

    }

    render() {
        return (

            <div>
                <div className="ReusableButton">
                    <Button
                        variant="primary"
                        size="lg"
                        block
                        onClick={this._handleSubmit}>
                        1st Period Science
                    </Button>

                </div>
                <div className="ReusableButton">
                    <Button
                        variant="primary"
                        size="lg"
                        block
                        onClick={this._handleSubmit}>
                        2nd Period Biology
                    </Button>
                </div>
                <div>
                <ButtonToolbar className="AdditionalOptionButton">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={this
                                    ._handleAddClass
                                    .bind(this)}
                                type="button">Add a class
                            </Button>
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={this
                                    ._handleDeleteClass
                                    .bind(this)}
                                type="button">Delete a class
                            </Button>
                </ButtonToolbar> 
                </div>
            </div>

        )
    }
}