import { Meteor } from "meteor/meteor";
import { WebApp } from "meteor/webapp";

import "../imports/api/users";
import "../imports/api/links";
import "../imports/startup/simple-schema-config.js";

Meteor.startup(() => {
  // code to run on server at startup
  WebApp.connectHandlers.use((req, res, next) => {
    console.log("This is my middleware");
    console.log(req.url, req.method, req.headers, req.query);
    // Set HTTP status headers
    // res.statusCode = 404;
    // Set HTTP headres
    // res.setHeader("my-header", "I was here");
    // Set HTTP body
    // res.write("<h1>This my middleware</h1>");
    // End HTTP request
    // res.end();
    next();
  });
});
