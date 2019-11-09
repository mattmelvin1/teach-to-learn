import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import { Button, ButtonToolbar } from "react-bootstrap";

import "../../Styles/Home.css";
import "../../Styles/Button.css";


class HomePage extends Component {


    onClickStudentButton() {

        this
            .props
            .history
            .push('/studentlogin')

    }

    onClickTeacherButton() {
        this
            .props
            .history
            .push('/instructorlogin')


    }

    render() {

        return (
            <div className="Home">
                <div className="lander">
                    <div>
                        <h1>Welcome to Teach to Learn </h1>
                        <p>The home of personalized games and study!</p>
                    </div>
                </div>
                <div className="ReusableButton">
                    <ButtonToolbar vertical="true">

                        <Button
                            className="ReusableButton"
                            block
                            onClick={this.onClickStudentButton
                                .bind(this)}
                            type="button">I am a student</Button>

                        <Button
                            className="ReusableButton"
                            block
                            onClick={this
                                .onClickTeacherButton
                                .bind(this)}
                            type="button">I am an instructor</Button>
                    </ButtonToolbar>
                </div>
            </div>

        );
    }
}
export default withRouter(HomePage);