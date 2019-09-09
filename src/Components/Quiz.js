import React from "react";
import { Button } from "react-bootstrap";

export default class Quiz extends React.Component {

    constructor(props) {
        super(props);

    }

    handleClassSubmit = event => {
        console.log("handle submit");
        event.preventDefault();
        this
            .props
            .history
            .push('/classtrends')

    }
    handleStudentSubmit = event => {
        console.log("handle submit");
        event.preventDefault();
        this
            .props
            .history
            .push('/studenttrends')

    }
    render() {
        return (
            <div>

                <div className="ReusableButton">
                    <Button
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.handleClassSubmit}>
                        See class results
                    </Button>
                </div>
                <div className="ReusableButton">
                    <Button
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.handleStudentSubmit}>
                        See student results
                    </Button>
                </div>
            </div>

        )
    }
}