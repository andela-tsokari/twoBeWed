var user = require('./../controllers/user.controllers.js');

var auth = require('./../../../../config/auth-mid');

// console.log(user.signup);
module.exports = function(router) {
  //define routes
  router
    .route('/signup')
    .post(user.signup);

  router
    .route('/login')
    .post(user.login);

  router
    .route('/auth')
    .get(user.auth);

  router
    .route('/logout')
    .get(auth, user.logout);

};