var vendor = require('./../controllers/vendor.controllers');

module.exports = function(router) {
  router
    .route('/vendors')
    .get(vendor.getAll)
    .post(vendor.create);

  router
    .route('/vendors/:id')
    .get(vendor.getById)
    .put(vendor.editById)
    .delete(vendor.deleteById);

};