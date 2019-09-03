import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./App";
import NotFound from "./Components/NotFound";
import AppliedRoute from "./Components/AppliedRoute";
import Class from "./Components/Class";
import StudentLogin from "./Components/StudentLogin";
import TeacherLogin from "./Components/TeacherLogin";
import Classes from "./Components/Classes";
import ClassTrends from "./Components/ClassTrends";
import Quizzes from "./Components/Quizzes";
import Quiz from "./Components/Quiz";
import StudentTrends from "./Components/StudentTrends";
import Students from "./Components/Students";

export default({childProps}) => <Switch >
    <AppliedRoute path="/"              exact component={Home}          props={childProps}/>
    <AppliedRoute path="/quiz"          exact component={Quiz}          props={childProps}/>
    <AppliedRoute path="/class"         exact component={Class}         props={childProps}/>
    <AppliedRoute path="/classes"       exact component={Classes}       props={childProps}/>
    <AppliedRoute path="/quizzes"       exact component={Quizzes}       props={childProps}/>
    <AppliedRoute path="/students"      exact component={Students}      props={childProps}/>
    <AppliedRoute path="/teacherLogin"  exact component={TeacherLogin}  props={childProps}/>
    <AppliedRoute path="/classtrends"   exact component={ClassTrends}   props={childProps}/>
    <AppliedRoute path="/studentlogin"  exact component={StudentLogin}  props={childProps}/>
    <AppliedRoute path="/studenttrends" exact component={StudentTrends} props={childProps}/>
    <Route component={NotFound}/>
</Switch>;

