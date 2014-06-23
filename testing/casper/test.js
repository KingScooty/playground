chai = require('chai');
chai.should();

if (typeof chai === 'undefined') {
  console.log('This example requires chai to be installed adjacent to mocha-casperjs')
  casper.exit(-1)
}

describe('Google searching', function() {
  describe('Top Down Cards', function () {
    before(function() {
      casper.start('http://www.google.co.uk/')
    })

    it('should retrieve 10 or more results', function() {
      casper.then(function() {
        casper.getTitle().should.contain('Google')
        casper.exists('form[action="/search"]').should.be.true
        this.fill('form[action="/search"]', {
          q: 'casperjs'
        }, true)
      })

      casper.waitForUrl(/q=casperjs/, function() {
        casper.getTitle().should.match(/casperjs/)
      });
    });
  });
});
