import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  // cartTotal: Ember.computed('shoppingCart', function() {
  //   var temp = 0;
  //   for(var i=0; i < 'shoppingCart.products.length'; i++) {
  //     temp += 'shoppingCart.products[i].price';
  //   }
  //   return temp;
  // }),

  actions: {
    removeFromCart(product) {
      var price = parseInt(product.get('price'));
      this.get('shoppingCart').remove(product);
      this.get('shoppingCart').subtractPrice(price);
    }
  }
});
