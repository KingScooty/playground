(function (exports) {
  "use strict";

  var basket = {

    items : [],
    total : 0,

    addToBasket : function(item) {
      // var itemObject = {
      //   name: item,
      //   quantity: 1
      // };
      // this.items.push(itemObject);
      this.items.push(item);
    },

    removeFromBasket : function(item) {
      var index = this.items.indexOf(item);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },

    updateItemQuantity : function() {
    }
  }
  exports.basket = basket;

})(this)