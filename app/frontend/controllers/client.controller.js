(function() {
  'use strict';
  function clientCtrl ($http, $location, $cookies, dev, prod) {
    // body...
    var vm = this;
    var token = $cookies.get('tbw-token');
    var config = {
      headers: {
        Authorization: 'Bearer '+token
      }
    };

    vm.add = function() {
      $http
        .post(dev + '/clients', vm.newclient, config)
        .success(function(data) {
          $location.path('/clients');
        })
        .error(function(data) {
          console.log(data);
        });
    };

    vm.getAll = function() {
      $http
        .get(dev + '/clients', config)
        .success(function(data) {
          vm.clients = data;
        })
        .error(function(data) {

        });
    };

    vm.getOne = function() {
      $http
        .get(dev + '/clients', config)
        .success(function(data) {
          vm.client = data;
        });
    };
  }

  angular
    .module('TwoBeWed')
    .controller('ClientCtrl', ['$http', '$location', '$cookies', 'dev', 'prod',
      clientCtrl]);

})();