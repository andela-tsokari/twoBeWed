 (function() {
  'use strict';
  function vendorCtrl ($http, $location, $cookies, dev, prod) {
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
        .post(prod + '/vendors', vm.vendor, config)
        .success(function(data) {
          console.log(data);
        })
        .error(function(data) {
          console.log(data);
        });
    };
  }

  angular
    .module('TwoBeWed')
    .controller('vendorCtrl', ['$http', '$location', '$cookies', 'dev', 'prod',
      vendorCtrl]);

})();