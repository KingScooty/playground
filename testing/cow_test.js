var expect = chai.expect;

describe("Cow", function () {
  var sandbox;

  beforeEach(function () {
    // create a sandbox for stub and mock testing
    sandbox = sinon.sandbox.create();

    // stub console methods
    sandbox.stub(window.console, "log");
    sandbox.stub(window.console, "error");
  });

  afterEach(function () {
    // restore the environment as it was before (remove stubs)
    sandbox.restore();
  });

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

  describe("#whispers", function () {
    it ("should log an error if no target is passed in", function () {
      (new Cow()).whispers();

      sinon.assert.notCalled(console.log);
      sinon.assert.calledOnce(console.error);
      sinon.assert.calledWithExactly(console.error, "missing target");
    });

    it ("should log whispers", function () {
      var whispers = (new Cow("Geoff")).whispers("Mr Farmer");

      sinon.assert.notCalled(console.error);
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, "Geoff whispers in Mr Farmer's ear.");
    });
  });
})