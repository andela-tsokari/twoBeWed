(function() {
  'use strict';
  angular
    .module('TwoBeWed')
    .constant('dev', 'http://localhost:4000/api/v1')
    .constant('prod', 'https://two-be-wed.herokuapp.com/api/v1');
})();