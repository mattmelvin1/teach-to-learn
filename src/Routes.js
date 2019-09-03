import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Components/App";
import NotFound from "./Components/NotFound";
import AppliedRoute from "./Components/AppliedRoute";
import Class from "./Components/Class";
import StudentLogin from "./StudentLogin";
import Login from "./Components/Login";
import Classes from "./Components/Classes";
import ClassTrends from "./Components/ClassTrends";
import Quizzes from "./Components/Quizzes";
import Quiz from "./Components/Quiz";
import StudentTrends from "./Components/StudentTrends";
import Students from "./Components/Students";

export default({childProps}) => <Switch >
    <AppliedRoute path="/class" exact component={Class} props={childProps}/>
    <AppliedRoute path="/" exact component={Home} props={childProps}/>
    <AppliedRoute
        path="/studentlogin"
        exact
        component={StudentLogin}
        props={childProps}/>
    <AppliedRoute path="/login" exact component={Login} props={childProps}/>
    <AppliedRoute path="/classes" exact component={Classes} props={childProps}/>
    <AppliedRoute
        path="/classtrends"
        exact
        component={ClassTrends}
        props={childProps}/>
    <AppliedRoute path="/quizzes" exact component={Quizzes} props={childProps}/>
    <AppliedRoute path="/quiz" exact component={Quiz} props={childProps}/>
    <AppliedRoute
        path="/studenttrends"
        exact
        component={StudentTrends}
        props={childProps}/>
    <AppliedRoute path="/students" exact component={Students} props={childProps}/> {/* Finally, catch all unmatched routes */}
    <Route component={NotFound}/>
</Switch>;

