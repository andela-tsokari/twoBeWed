var vendor = require('./../controllers/vendor.controllers');

module.exports = function(router) {
  router
    .route('/vendors')
    .get(vendor.getAll)
    .post(vendor.create);

  router
    .route('/vendors/:name')
    .get(vendor.getOne)
    .put(vendor.editOne)
    .delete(vendor.deleteOne);

};