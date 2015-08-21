var express = require('express');
var routes = require('./../app/apis/router/');
var cors = require('cors');

var bodyParser = require('body-parser');

module.exports = function() {
  //body
  'use strict';
  var app = express(),
      router = express.Router();

  app
    .use(cors())
    .use(bodyParser.json())
    .use(express.static(__dirname.slice(0, (__dirname.length - 6))))
    .get('/', function(req, res) {
      res
        .sendFile(__dirname.slice(0, (__dirname.length - 6)));
    })
    .use(bodyParser.urlencoded({extended: true}))
    .use('/api/v1/', router);

  routes(router);

  return app;
};
