import React from "react";
import { Button } from "react-bootstrap";

export default class Quizzes extends React.Component {

    constructor(props) {
        super(props);

    }

    handleQuizSubmit = event => {
        console.log("handle submit");
        event.preventDefault();
        this
            .props
            .history
            .push('/quiz')

    }
    handleStudentSubmit = event => {
        console.log("handle submit");
        event.preventDefault();
        this
            .props
            .history
            .push('/quiz')

    }
    render() {
        return (
            <div>
                <div className="ReusableButton">
                    <Button
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.handleQuizSubmit}>
                        Quiz 1
                    </Button>
                </div>
                <div className="ReusableButton">
                    <Button
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.handleStudentSubmit}>
                        Quiz 2
                    </Button>
                </div>
            </div>

        )
    }
}