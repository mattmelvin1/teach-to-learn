import React from "react";
import { Button } from "react-bootstrap";
import "../Styles/ReusableButton.css";


export default class Class extends React.Component {

    constructor(props) {
        super(props);

    }

    handleStudentSubmit = event => {
        event.preventDefault();
        this
            .props
            .history
            .push('/students')

    }
    handleQuizSubmit = event => {
        event.preventDefault();
        this
            .props
            .history
            .push('/quizzes')

    }
    render() {
        return (

            <div >
                <div className="ReusableButton">
                    <Button
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.handleStudentSubmit}>
                        Manage students
                    </Button>
                </div>
                <div className="ReusableButton">
                    <Button
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.handleQuizSubmit}>
                        Manage quizzes
                    </Button>
                </div>
            </div>
        )
    }
}