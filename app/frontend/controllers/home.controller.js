(function() {
  'use strict';

  angular
    .module('TwoBeWed')
    .controller('HomeCtrl', ['$http', '$location', '$cookies', homeCtrl]);

  function homeCtrl ($http, $location, $cookies) {
    // body...
    var vm = this;

    vm.signup = function () {
      // body...

      var su = angular.copy(vm.su);

      $http
        .post('http://localhost:4000/api/v1/signup', su)
        .success(function(data, status, headers) {
          console.log(status, headers, data);
        })
        .error(function(data) {
          console.log("error", data);
        });
    };

    vm.login = function () {
      // body...
      var old = angular.copy(vm.old);

      $http
        .post('http://localhost:4000/api/v1/login', old)
        .success(function(data) {
          $cookies.put('tbw-token', data.token);
        })
        .error(function(data, status, headers) {
          console.log(data, status, headers);
        });
    };

    var token = $cookies.get('tbw-token');
    var config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    };

    vm.logout = function() {
      $http
        .get('http://localhost:4000/api/v1/login', config)
        .success(function(data) {
          $cookies.put('tbw-token', null);
        });
    };

  }

})();