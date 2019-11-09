import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Components/Pages/HomePage";
import Quiz from "./Components/Pages/Quiz";
import ClassAdmin from "./Components/Pages/ClassAdmin";
import Classes from "./Components/Pages/Classes";
import Quizzes from "./Components/Pages/Quizzes";
import NotFound from "./Components/Pages/NotFound";
import Students from "./Components/Pages/Students";
import ClassTrends from "./Components/Pages/ClassTrends";
import AppliedRoute from "./appliedRoute";
import StudentLogin from "./Components/Pages/StudentLogin";
import TeacherLogin from "./Components/Pages/InstructorLogin";
import StudentTrends from "./Components/Pages/StudentTrends";
import AddClass from "./Components/Pages/AddClass";


export default ({ childProps }) => <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/home" exact component={Home} props={childProps} />
    <AppliedRoute path="/quiz" exact component={Quiz} props={childProps} />
    <AppliedRoute path="/class-administration" exact component={ClassAdmin} props={childProps} />
    <AppliedRoute path="/classes" exact component={Classes} props={childProps} />
    <AppliedRoute path="/quizzes" exact component={Quizzes} props={childProps} />
    <AppliedRoute path="/students" exact component={Students} props={childProps} />
    <AppliedRoute path="/instructorLogin" exact component={TeacherLogin} props={childProps} />
    <AppliedRoute path="/classtrends" exact component={ClassTrends} props={childProps} />
    <AppliedRoute path="/studentlogin" exact component={StudentLogin} props={childProps} />
    <AppliedRoute path="/studenttrends" exact component={StudentTrends} props={childProps} />
    <AppliedRoute path="/addclass" exact component={AddClass} props={childProps} />
    <Route component={NotFound} />
</Switch>;

