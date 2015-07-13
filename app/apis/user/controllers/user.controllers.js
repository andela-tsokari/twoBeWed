var userModel = require('./../model/user.model');
var jwt = require('jsonwebtoken');
var secret = "lla;fnlaohal;al";
var bcrypt = require('bcrypt');

exports.signup = function(req, res) {
  if (req.body) {
    var user = req.body;

    bcrypt.hash(user.password, 10, function(err, hash) {
      if (hash) {
        user.password = hash;

        userModel
          .create(user, function(error, saved) {
            if (saved) {
              res
                .json({
                  message: 'You have successfully signed up',
                  credentials: {
                    username: saved.username,
                    password: saved.password
                  }
                });
            }
            else {
              res
                .send(error.errors);
            }
          });
      }
    });

  }

  else {
    res
      .send({
        message: 'You have to send details'
      });

  }

};

exports.login = function(req, res) {

  if (req.body.username && req.body.password) {
    /*

      when trying to find a unique entry in mongodb, it is important to do
      so using findOne and not find. this is as, regardless of the number
      of entries, `find()` will always return an array. However, `findOne`
      returns the unique object.

    */
    userModel
      .findOne({
        username: req.body.username
      },
      function(notFound, found) {
        if (found) {
          bcrypt
            .compare(req.body.password, found.password, function(err, valid) {
              if (err) {
                res
                  .json({
                    error: 'Incorrect Username/Password',
                  });
              }
              else if (valid) {
                var profile = {
                  username: found.username,
                  name: found.name,
                  email: found.email,
                  issuer: 'twobewed'
                };

                var token = jwt.sign(profile, secret);
                res
                  .json({
                    message: 'Signed In',
                    token: token
                  });

              }
            });

        }

        if (notFound) {
          res
            .json({
              error: 'You have not signed up yet'
            });
        }
      });

  }

  else {
    res
      .send({
        message: 'Please fill in details'
      });

  }

};

exports.auth = function(req, res) {

  // hWT : header With Token
  if (req.get('Authorization')) {
    var hWT = req.get('Authorization');

    var token = hWT.substring(7);

    var details = jwt.decode(token);

    // checks if the token is valid

    if (hWT && details === null) {
      res
        .status(401)
        .json({
          auth_status: false,
          message: 'You do not have the authorization for this page'
        });

    }

    /*  if token is valid, search for a user in the user's database that matches
    the user in the token
    */

    else {
      userModel
        .findOne({
          username: details.username
        }, function(notFound, dbuser) {
          if(dbuser){
            res
              .status(200)
              .json({
                user: dbuser.username,
                issuer: details.issuer,
                auth_status: true,
                message: dbuser.username + ' is registered and authorised'
              });

          }

          else {
            res
              .status(401)
              .json({
                user: details.username,
                auth_status: false,
                message: details.username + ' is not registered as a User Here.' +
                'Do Sign Up.'
              });

          }

        });

    }

  }

  else {
    res
      .send({
        error: 'No Authorization header in request'
      });
  }

};

exports.logout = function(req, res) {

  res
    .status(200)
    .json({
      message: 'you have been logged out'
    });

};