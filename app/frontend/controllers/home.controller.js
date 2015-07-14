(function() {
  'use strict';

  angular
    .module('TwoBeWed')
    .controller('HomeCtrl', ['$http', '$location', '$cookies', 'dev', 'prod',
      homeCtrl]);

  function homeCtrl ($http, $location, $cookies, dev, prod) {
    // body...
    var vm = this;

    vm.signup = function () {
      // body...

      var su = angular.copy(vm.su);

      $http
        .post(dev + '/signup', su)
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
        .post(dev + '/login', old)
        .success(function(data) {
          console.log(data);
          $cookies.put('tbw-token', data.token);
          vm.message = 'Welcome' + data.user;
          $location.path('/clients');
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
        .get(dev + '/logout', config)
        .success(function(data) {
          $cookies.put('tbw-token', null);
        });
    };

  }

})();