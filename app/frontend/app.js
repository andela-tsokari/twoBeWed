(function() {
  function states ($stateProvider, $urlRouterProvider) {
    // body...
    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './app/frontend/views/home.html',
        controller: 'HomeCtrl as home'
      })
      .state('client', {
        url: '/clients',
        templateUrl: './app/frontend/views/client.html',
        controller: 'ClientCtrl as client'
      })
      .state('vendor', {
        url: '/vendors',
        templateUrl: './app/frontend/views/vendor.html'
      });

  }

  angular
    .module('TwoBeWed', ['ui.router', 'ui.bootstrap', 'ngCookies'])
    .config(['$stateProvider', '$urlRouterProvider', states]);


})();
