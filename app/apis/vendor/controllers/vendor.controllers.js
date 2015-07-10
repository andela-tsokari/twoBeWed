var vendorModel = require('./../model/vendor.model');

exports.getAll = function(req, res) {
  vendorModel
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
  var vendor = req.body;

  vendorModel
    .create(vendor, function(err, saved) {
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
  vendorModel
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

  vendorModel
    .findByIdAndUpdate(query, changes, function(err, success) {
      if (err) {
        res
          .json(err);
      }

      else {
        res
          .json({
            message: 'vendor Details have been updated successfully',
            updated: success
          });
      }
    });
};

exports.deleteById = function(req, res) {
  var query = req.params.id;
  vendorModel
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
            message: 'vendor with id: ' + query + 'has been deleted',
          });
      }
    });
};