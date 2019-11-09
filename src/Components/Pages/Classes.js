import React from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import Header from "../Elements/Header";
import ClassButtons from "../Elements/ClassButtons";
import * as Action from '../../Actions/classActions';

import "../../Styles/Button.css";
import AddClass from "./AddClass";

const list =
    [
        {
            id: 1,
            name: '1st Period Science'
        },
        {
            id: 2,
            name: '2nd Period Biology'
        }
    ];

export default class Classes extends React.Component {
    constructor(props) {
        super(props);
        Action.updateCurrentClasses(list)
        this.state = {
            showStudentButton: false,
            showTeacherButton: false,
            classes: list
        };
    }

    getClasses

    handleSubmit = event => {
        event.preventDefault();
        this
            .props
            .history
            .push('/class-administration')

    }

    handleAddClass = event => {
        event.preventDefault();
        this
            .props
            .history
            .push('/addclass')

    }

    handleDeleteClass = event => {
        event.preventDefault();
        this
            .props
            .history
            .push('/classes')

    }

    render() {
        return (
            <div>
                <Header />
                <div>
                <ClassButtons list={this.state.classes} handleSubmit={this.handleSubmit} />

                <div>
                    <ButtonToolbar className="AdditionalOptionButton">
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={this
                                .handleAddClass
                                .bind(this)}
                            type="button">Add a class
                        </Button>
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={this
                                .handleDeleteClass
                                .bind(this)}
                            type="button">Delete a class
                        </Button>
                    </ButtonToolbar>
                </div>
                </div>
            </div>

        )
    }
}