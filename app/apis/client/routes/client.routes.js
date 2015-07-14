var client = require('./../controllers/client.controllers');

var auth = require('./../../../../config/auth-mid');

module.exports = function(router) {
  router
    .route('/clients')
    .get(auth, client.getAll)
    .post(auth, client.create);

  router
    .route('/clients/:id')
    .get(auth, client.getById)
    .put(auth, client.editById)
    .delete(auth, client.deleteById);

};