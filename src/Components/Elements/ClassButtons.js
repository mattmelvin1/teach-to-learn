import React from "react";
import {Button, ButtonToolbar, ButtonGroup} from "react-bootstrap";
import "../../Styles/Button.css";


export default class ClassButtons extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.props.handleSubmit.bind(this);
    }

render() {

    return (
        <div className="ReusableButton">
        <ButtonGroup vertical>
            {this.props.list.map((classInfo) =>
                <Button
                    className="ReusableButton"
                    block
                    onClick={this.handleSubmit}>
                    {classInfo.name}
                </Button>
            )}
        </ButtonGroup>
    </div>

    )
}
}