import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { Tracker } from "meteor/tracker";
import { Session } from "meteor/session";

import { routes, onAuthChange } from "../imports/routes/routes";
import "../imports/startup/simple-schema-config.js";

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  Session.set("showVisible", true);
  render(routes, document.getElementById("app"));
});
