import React from "react";
import { Button } from "react-bootstrap";
import "../../Styles/Button.css";


export default class Class extends React.Component {


    _handleStudentSubmit = event => {
        event.preventDefault();
        this
            .props
            .history
            .push('/students')

    }
    _handleClassSubmit = event => {
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
                        onClick={this._handleStudentSubmit}>
                        Manage students
                    </Button>
                </div>
                <div className="ReusableButton">
                    <Button
                        variant="primary"
                        size="lg"
                        block
                        onClick={this._handleClassSubmit}>
                        Manage quizzes
                    </Button>
                </div>
            </div>
        )
    }
}