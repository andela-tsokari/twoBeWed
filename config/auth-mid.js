var request = require('request');
var api = require('./url-config')[process.env.NODE_ENV];

module.exports = function (req, res, next) {
  // body...
  var hwt = req.get('Authorization');
  if (typeof(hwt) === 'undefined') {
    res
      .json({
        message: 'You do not have access to this resource'
      });
  }

  else {
    request
      .get({
        url: api + '/auth',
        method: 'GET',
        headers: {
          Authorization: hwt
        }
      },

      function (error, response, body) {
        // body...
        if (error) {
          res
            .json({
              error: JSON.parse(error)
            });
        }

        else if (body) {
          // you must parse the body as json or else, you will have errors
          var body = JSON.parse(body);

          if((body.auth_status === true) && (body.issuer === 'twobewed')) {
            next();
          }
        }
      });
  }
};