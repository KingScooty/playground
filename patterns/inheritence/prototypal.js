(function () {
  'use strict';

  /**
   * Helper functions for older browsers
   */

  if (!Object.hasOwnProperty('create')) {
    Object.create = function (parentObj) {
      function tmpObj() {}
      tmpObj.prototype = parentObj;
      return new tmpObj();
    };
  };
  if (!Object.hasOwnProperty('defineProperties')) {
    Object.defineProperties = function (obj, props) {
      for (var prop in props) {
        Object.defineProperty(obj, prop, props[prop]);
      };
    };
  }

  /***/

  var human = {
    name: '',
    gender: '',
    planetOfBirth: 'Earth',
    sayGender: function () {
      alert(this.name + ' says my gener is ' + this.gender);
    },
    sayPlanet: function () {
      alert(this.name + ' was born on ' + this.planetOfBirth);
    }
  }

  var male = Object.create(human, {
    gender: {value: 'Male'}
  });

  var female = Object.create(human, {
    gender: {value: 'Female'}
  });

  var david = Object.create(male, {
    name: {value: 'David'},
    planetOfBirth: {value: 'Mars'}
  });

  var jane = Object.create(female, {
    name: {value: 'Jane'}
  });

  david.sayGender(); // David says my gender is Male

  david.sayPlanet(); // David was born on Mars

  jane.sayGender(); // Jane says my gender is Female

  jane.sayPlanet(); // Jane was born on Earth
})();