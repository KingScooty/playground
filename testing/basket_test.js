var expect = chai.expect;

describe("Basket", function () {
  describe("logic", function () {
    it ("should add item to basket ", function () {
      basket.addToBasket('cake');
      expect(basket.items[0]).to.equal('cake');
      // expect(basket.items[0].name).to.equal('cake');
    });

    it ("should update item quantity", function() {
    });

    it ("should remove item from basket", function () {
      basket.removeFromBasket('cake');
      console.log(basket.items[0]);
      expect(basket.items[0]).to.equal(undefined);
    });

  })
})