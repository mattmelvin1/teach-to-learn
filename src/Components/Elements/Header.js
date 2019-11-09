import React, { Component } from "react";

import "../../Styles/Home.css";
import "../../Styles/Button.css";


export default class Home extends Component {

    render() {
        return (
            <div className="Home">
                <div className="lander">
                    <div>
                        <h1>Welcome to Teach to Learn </h1>
                        <p>The home of personalized games and study!</p>
                    </div>
                </div>
            </div>

        );
    }
}
