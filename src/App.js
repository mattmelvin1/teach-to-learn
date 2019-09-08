import React from 'react';
import Routes from "./Routes";
import {Button} from "react-bootstrap";
import {withRouter} from "react-router-dom"
import TeachToLiveNavbar from "./Components/TeachToLiveNavbar";


import './App.css';
import "./Styles/HomepageButton.css";



class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showStudentButton: true,
            showTeacherButton: true
        }

    }

    _onClickStudentButton() {
        this
            .props
            .history
            .push('/studentlogin')
        this.setState({
            showTeacherButton: !this.state.showTeacherButton
        })
        this.setState({
            showStudentButton: !this.state.showStudentButton
        })
    }

    _onClickTeacherButton() {
        this
            .props
            .history
            .push('/teacherLogin')
        this.setState({
            showTeacherButton: !this.state.showTeacherButton
        })
        this.setState({
            showStudentButton: !this.state.showStudentButton
        })
    
    }

    render() {
        return (
            <div>
                
                <TeachToLiveNavbar/>
                <Routes/>
                <div className="HomepageButton">
                    {this.state.showStudentButton && <Button
                        className="ButtonSizing"
                        variant="primary"
                        size="lg"
                        block
                        onClick={this
                        ._onClickStudentButton
                        .bind(this)}
                        type="button">I am a student</Button>}
                </div>

                <div className="HomepageButton">
                    {this.state.showTeacherButton && <Button
                        className="ButtonSizing"
                        variant="primary"
                        size="lg"
                        block
                        onClick={this
                        ._onClickTeacherButton
                        .bind(this)}
                        type="button">I am an instructor</Button>}
                </div>
            </div>
        );

    }
}
export default withRouter(App);
