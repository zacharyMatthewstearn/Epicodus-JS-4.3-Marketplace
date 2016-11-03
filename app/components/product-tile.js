import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(product) {
      var price = parseInt(product.get('price'));
      this.get('shoppingCart').add(product);
      this.get('shoppingCart').addPrice(price);
    },
  }
});
