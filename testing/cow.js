(function (exports) {
  "use strict";

  function Cow(name) {
    this.name = name || 'Anon the cow';
  }
  exports.Cow = Cow;

  Cow.prototype = {
    greets: function(target) {
      if (!target)
        throw new Error('missing target');
      return this.name + ' greets ' + target;
    }
  };
})(this);
