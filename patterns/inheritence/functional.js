var human = function (name) {
  var that = {};

  that.name = name || '';
  that.gender = '';
  that.planetOfBirth = 'Earth';
  that.sayGender = function () {
    alert(that.name + ' says my gender is ' + that.gender);
  };
  that.sayPlanet = function () {
    alert(that.name + ' was born on ' + that.planetOfBirth);
  };

  return that;
}

var male = function (name) {
  var that = human(name);
  that.gender = 'Male';
  return that;
}

var female = function (name) {
  var that = human(name);
  that.gender = 'Female';
  return that;
}

var david = make('David');
var jane = female('Jane');

david.sayGender(); // David says my gender is Male
jane.sayGender(); // Jane says my gender is Female

david.planetOfBirth = 'Mars';
david.sayPlanet(); // David was born on Mars
jane.sayPlanet(); // Jane was born on Earth