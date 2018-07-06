import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { Tracker } from "meteor/tracker";

import { routes, onAuthChange } from "../imports/routes/routes";

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  Meteor.call("addNumbers", 4, 11, (err, res) => {
    console.log("Sum numbers", err, res);
  });
  render(routes, document.getElementById("app"));
});
