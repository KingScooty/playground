var expect = chai.expect;

describe("Cow", function() {
  describe("constructor", function() {
    it ("should have a default name", function() {
      var cow = new Cow();
      expect(cow.name).to.equal("Anon the cow");
    });
  })
})