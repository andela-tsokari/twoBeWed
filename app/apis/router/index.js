var userRoutes = require('./../user/routes/user.routes'),
    clientRoutes = require('./../client/routes/client.routes'),
    vendorRoutes = require('./../vendor/routes/vendor.routes');

module.exports = function(app) {
  userRoutes(app);
  clientRoutes(app);
  vendorRoutes(app);
};