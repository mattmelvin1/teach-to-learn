import React from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import "../../Styles/Button.css";

export default class Quizzes extends React.Component {


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


    _handleCreateQuiz = event => {
        event.preventDefault();
        this
            .props
            .history
            .push('/quizzes')

    }
    _handleDeleteQuiz = event => {
        event.preventDefault();
        this
            .props
            .history
            .push('/quizzes')

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

                <ButtonToolbar className="AdditionalOptionButton">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={this
                                    ._handleCreateQuiz
                                    .bind(this)}
                                type="button">Create a quiz
                            </Button>
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={this
                                    ._handleDeleteQuiz
                                    .bind(this)}
                                type="button">Delete a quiz
                            </Button>
                </ButtonToolbar> 
            </div>

        )
    }
}