(function() {
  'use strict';
  function clientCtrl ($http, $location, $cookies, dev, prod) {
    // body...
    var vm = this;

    vm.newclient = {};
    vm.newclient.package = {};
    vm.newclient.package.extras = [];

    vm.options = ['Engagement Party',
    'Bridal Shower and Luncheon', 'Rehearsal Dinner', 'Post Wedding Day Brunch',
    'Invitation RSVP Management', 'Hospitality Suite Management',
    'Wedding Invitation Assembly',
    'Welcome Bags Design / Purchasing / Assembly / Delivery',
    'Hourly consultations', 'Style and Design Consultation'];

    vm.insert = function(option, list) {
      var idx = list.indexOf(option);
      if (idx > -1) list.splice(idx, 1);
      else list.push(option);
    };

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
          vm.newclient = {};
          console.log(data);
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

    vm.getOne = function(one) {

      vm.one = angular.copy(one);

      $http
        .get(dev + '/clients/'+vm.one._id, config)
        .success(function(data) {
          console.log(data);
        });
    };

    vm.editOne = function(one) {
      vm.one = angular.copy(one);

      var index = vm.client.indexOf(vm.one);
      index.show = false;
      index.hide = true;

      $http
        .get(dev + '/clients/'+vm.one._id, changes, config)
        .success(function(data) {
          console.log(data);
        });
    };

/*
    $scope.deleteRunningTimer = function ( runningTimer ) {

      var index = $scope.runningTimers.indexOf( runningTimer );

      $scope.confirm = window.confirm("Are You Sure You Want to Delete this Running Timer?");

      if ($scope.confirm === true) {

        $scope.runningTimers.splice( index, 1 );

      }

      return;

    };

    $scope.editRunningTimer = function ( runningTimer ) {

      var index = $scope.runningTimers.indexOf( runningTimer );

      index.show = false;

      index.hide = true;

    };
*/

    vm.deleteOne = function(one) {
      vm.one = angular.copy(one);

      var index = vm.clients.indexOf(vm.one);

      vm.confirm = window.confirm('Are You Sure You Want to Delete This Client?');

      if (vm.confirm === true) {
        vm.clients.splice(index, 1);
        $http
        .delete(dev + '/clients/'+vm.one._id, config)
        .success(function(data) {
          console.log(data);

        });

      }
    };


  }

  angular
    .module('TwoBeWed')
    .controller('ClientCtrl', ['$http', '$location', '$cookies', 'dev', 'prod',
      clientCtrl]);

})();