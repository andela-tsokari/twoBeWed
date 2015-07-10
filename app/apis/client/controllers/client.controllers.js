var clientModel = require('./../model/client.model');

exports.getAll = function(req, res) {
  clientModel
    .find(function(err, success) {
      if (err) {
        res
          .json({
            error: err
          });
      }

      else {
        res
          .json(success);
      }

    });
};

exports.create = function(req, res) {
  var client = req.body;

  clientModel
    .create(client, function(err, saved) {
      if (err) {
        res
          .json(err);
      }
      else {
        res
          .json(saved);
      }
    });
};

exports.getById = function(req,res) {
  var query = req.params.id;
  clientModel
    .findById(query, function(err, success) {
      if (err) {
        res
          .json({
            error: err
          });
      }

      else {
        res
          .json(success);
      }
    });
};

exports.editById = function(req, res) {
  var query = req.params.id;
  var changes = req.body;

  clientModel
    .findByIdAndUpdate(query, changes, function(err, success) {
      if (err) {
        res
          .json(err);
      }

      else {
        res
          .json({
            message: 'Client Details have been updated successfully',
            updated: success
          });
      }
    });
};

exports.deleteById = function(req, res) {
  var query = req.params.id;
  clientModel
    .findByIdAndRemove(query, function(err, success) {
      if (err) {
        res
          .json({
            error: err
          });
      }

      else {
        res
          .json({
            message: 'Client with id: ' + query + 'has been deleted',
          });
      }
    });
};