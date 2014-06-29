var App = (function() {
  'use strict';

  var settings;

  return {

    init: function(initialSettings) {
      settings = initialSettings;
    },

    getVersion: function() {
      return settings.version;
    }

  };

})();

// Search module:
(function(App) {

  var module = {};

  module.find = function(query) {
    // Perform search

  };

  module.verifyQuery = function(query) {
    // Ver
  };

  // More module methods go here

  app.search = module;

})(App);