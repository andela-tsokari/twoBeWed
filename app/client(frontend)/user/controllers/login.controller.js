(function() {
  'use strict';
  angular
    .module('TwoBeWed')
    .controller('login', ['$http', '$cookies', login]);

  function login ($http, $cookies){
    var vm = this;
    vm.login = function() {
      vm.payload = {
        username: vm.username,
        password: vm.password
      };

      $http
        .post('https://two-be-wed.herokuapp.com/api/v1/login', vm.payload)
        .success(function(data) {
          console.log(data);
        })
        .error(function(data) {
          console.log(data);
        });
    };
  }

})();