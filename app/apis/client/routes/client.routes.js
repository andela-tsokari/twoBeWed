var client = require('./../controllers/client.controllers');

module.exports = function(router) {
  router
    .route('/clients')
    .get(client.getAll)
    .post(client.create);

  router
    .route('/clients/:name')
    .get(client.getOne)
    .put(client.editOne)
    .delete(client.deleteOne);

};