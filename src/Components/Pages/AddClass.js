import React from "react";
import { Button, ButtonToolbar, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import * as Action from '../../Actions/classActions';

import "../../Styles/Login.css";


export default class AddClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            classes: props.classes
        };    
    }

    handleChange (event) {
        console.log(event);
        this.setState ({ 
            input: event.target.value 
        })
      }
    handleSubmit (event) {
        event.preventDefault()
        const newItem = { id: 4, name: this.state.input }
        Action.updateCurrentClasses(newItem)
        
        this
            .props
            .history
            .push('/classes')
    }
    
render(){
    console.log(this.state.classes)

        return (
            <div>
                <div className="LoginForm">
                    <form >
                        <FormGroup controlId="classname" bsSize="large">
                            <ControlLabel>Class Name</ControlLabel>
                            <FormControl
                                autoFocus
                                placeholder="Enter Class Name"
                                onChange={this.handleChange.bind(this)}
                                />
                        </FormGroup>

                        <ButtonToolbar className="pull-right">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={this.handleSubmit.bind(this)}
                                type="button">Add Class
                            </Button>
                        </ButtonToolbar>
                    </form>
                </div>
            </div>
        )
        }
}


