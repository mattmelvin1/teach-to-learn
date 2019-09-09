import React from "react";
import {Button} from "react-bootstrap";
import "../Styles/Button.css";

export default class ClassButton extends React.Component {
    constructor(props) {
        super(props);
    };


render() {
    return (
        <div className="Button">
            <Button
                onClick={this.props.onClick}
                href={this.props.href}>
                2nd Period
            </Button>
        </div>

    )
}
}