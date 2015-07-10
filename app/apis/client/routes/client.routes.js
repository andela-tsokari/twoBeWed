var client = require('./../controllers/client.controllers');

module.exports = function(router) {
  router
    .route('/clients')
    .get(client.getAll)
    .post(client.create);

  router
    .route('/clients/:id')
    .get(client.getById)
    .put(client.editById)
    .delete(client.deleteById);

};