import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { Tracker } from "meteor/tracker";

import { routes, onAuthChange } from "../imports/routes/routes";
import { Links } from "../imports/api/links";

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Tracker.autorun(() => {
  const myLinks = Links.find().fetch();
  console.log(myLinks);
});

Meteor.startup(() => {
  render(routes, document.getElementById("app"));
});
