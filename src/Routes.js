import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import Class from "./Components/Class";
import Classes from "./Components/Classes";
import Quizzes from "./Components/Quizzes";
import NotFound from "./Components/NotFound";
import Students from "./Components/Students";
import ClassTrends from "./Components/ClassTrends";
import AppliedRoute from "./Components/AppliedRoute";
import StudentLogin from "./Components/StudentLogin";
import TeacherLogin from "./Components/InstructorLogin";
import StudentTrends from "./Components/StudentTrends";

export default({childProps}) => <Switch>
    <AppliedRoute path="/"              exact component={Home}          props={childProps}/>
    <AppliedRoute path="/home"          exact component={Home}          props={childProps}/>
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

