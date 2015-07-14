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
        .post(prod + '/clients', vm.newclient, config)
        .success(function(data) {
          $location.path('/clients');
          vm.newclient = {};
        })
        .error(function(data) {
          console.log(data);
        });
    };

    vm.getAll = function() {
      $http
        .get(prod + '/clients', config)
        .success(function(data) {
          vm.clients = data;
        })
        .error(function(data) {

        });
    };

    vm.getOne = function() {

      angular.forEach(vm.clients, function(index, element) {
        console.log(element);
      });

      $http
        .get(prod + '/clients/{{one._id}}', config)
        .success(function(data) {
          console.log(data);
        });
    };
  }

  angular
    .module('TwoBeWed')
    .controller('ClientCtrl', ['$http', '$location', '$cookies', 'dev', 'prod',
      clientCtrl]);

})();