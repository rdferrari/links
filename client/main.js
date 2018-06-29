import { Meteor } from "meteor/meteor";
import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import Home from "../imports/ui/Home";
import Login from "../imports/ui/Login";
import Signup from "../imports/ui/Signup";
import Link from "../imports/ui/Link";
import NotFound from "../imports/ui/NotFound";

window.browserHistory = browserHistory;

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/links" component={Link} />
    <Route path="/*" component={NotFound} />
  </Router>
);

Meteor.startup(() => {
  render(routes, document.getElementById("app"));
});
