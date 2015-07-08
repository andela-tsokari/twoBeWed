module.exports = (function () {
  'use strict';
  return {
    db: {
      development: {
        uri: 'mongodb://localhost/two-be-wed'
      },
      test: {
        uri: 'mongodb://localhost/two-be-wed-test'
      },
      staging: {
        uri: process.env.MONGOLAB_URI
      },
      production: {
        uri: process.env.MONGOLAB_URI
      }
    },

    port: process.env.PORT || 4000
  };
})();