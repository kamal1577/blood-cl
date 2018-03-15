import React from "react";
import { Route } from "react-router-dom";
import { Switch, BrowserRouter } from "react-router-dom";




// Children
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";
import DonateForm from "./components/DonateForm";
import Thanks from "./components/Thanks";

import PageNotFound from "./components/PageNotFound";

export default (
	<Switch>
    	<Route exact path="/" component={Home} />
    	<Route path="/login" component={SignIn} />
    	<Route path="/sign-up" component={SignUp} />
    	<Route path="/home" component={UserHome} />
		<Route path="/donateform" component={DonateForm} /> 
		<Route path="/thanks" component={Thanks}/>
    	<Route path="*" component={PageNotFound} />
    </Switch>
);









