var expect = chai.expect;

describe("Cow", function () {
  describe("constructor", function () {
    it ("should have a default name", function () {
      var cow = new Cow();
      expect(cow.name).to.equal("Anon the cow");
    });

    it ("should set a cow's name if a name is provided", function () {
      var cow = new Cow("Geoff");
      expect(cow.name).to.equal("Geoff");
    });
  });

  describe("#greets", function () {
    it ("should throw if no target is passed in", function () {
      expect (function() {
        (new Cow()).greets();
      }).to.throw(Error);
    });

    it ("should greet passed target", function () {
      var greetings = (new Cow("Geoff")).greets("Mr Farmer");
      expect(greetings).to.equal("Geoff greets Mr Farmer");
    });
  });
})