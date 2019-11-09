import React from 'react';
import Routes from "./routes";
import {withRouter} from "react-router-dom"
import TeachToLiveNavbar from "./Components/Elements/TeachToLiveNavbar";
import Home from "./Components/Pages/Home";

import './App.css';
import "./Styles/Button.css";



class App extends React.Component {

    render() {
        return (
            <div> 
                <TeachToLiveNavbar/>
                <Routes/>
                <Home />
            </div>
        );

    }
}
export default withRouter(App);
