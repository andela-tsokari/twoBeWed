(function() {
  'use strict';
  angular
    .module('TwoBeWed')
    .controller('signup', ['$http', signup]);


  function signup ($http){
    var vm = this;

    vm.signup = function () {
      // body...
      vm.payload = {
        name: vm.name,
        email: vm.email,
        username: vm.username,
        password: vm.password
      };

      $http
        .post('http://localhost:4000/api/v1/signup', vm.payload)
        .success(function(data, status, headers) {
          console.log(data + status);
        })
        .error(function(data, status, headers) {
          console.log(data + status);
        });
    };

  }
})();