var vendor = require('./../controllers/vendor.controllers');

var auth = require('./../../../../config/auth-mid');

module.exports = function(router) {
  router
    .route('/vendors')
    .get(auth, vendor.getAll)
    .post(auth, vendor.create);

  router
    .route('/vendors/:id')
    .get(auth, vendor.getById)
    .put(auth, vendor.editById)
    .delete(auth, vendor.deleteById);

};