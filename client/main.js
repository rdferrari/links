import { Meteor } from "meteor/meteor";
import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { Tracker } from "meteor/tracker";

import Home from "../imports/ui/Home";
import Login from "../imports/ui/Login";
import Signup from "../imports/ui/Signup";
import Link from "../imports/ui/Link";
import NotFound from "../imports/ui/NotFound";

const unauthenticatedPages = ["/", "/login", "/signup"];
const authenticatedPages = ["/links"];

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/links" component={Link} />
    <Route path="/*" component={NotFound} />
  </Router>
);

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.push("/links");
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.push("/");
  }
  console.log("isAuthenticated", isAuthenticated);
});

Meteor.startup(() => {
  render(routes, document.getElementById("app"));
});
