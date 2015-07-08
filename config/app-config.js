var express = require('express');
var routes = require('./../app/apis/router/');

var bodyParser = require('body-parser');

module.exports = function() {
  //body
  'use strict';
  var app = express(),
      router = express.Router();

  app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use('/', router);

  routes(router);

  return app;
};
