import React from "react";
import { Button } from "react-bootstrap";
import "../Styles/ReusableButton.css";

export default class Classes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showStudentButton: false,
            showTeacherButton: false
        };
    }

    handleSubmit = event => {
        console.log("handle submit");
        event.preventDefault();
        this
            .props
            .history
            .push('/class')

    }
    render() {
        return (

            <div>
                <div className="ReusableButton">
                    <Button
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.handleSubmit}>
                        1st Period
                    </Button>

                </div>
                <div className="ReusableButton">
                    <Button
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.handleSubmit}>
                        2nd Period
                    </Button>
                </div>
            </div>

        )
    }
}