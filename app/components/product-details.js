import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(product) {
      var price = product.get('price');
      this.get('shoppingCart').add(product);
      this.get('shoppingCart').addPrice(price);

      var params = {
        quantity: product.set('quantity', product.get('quantity')-1)
      };
      this.sendAction('removeFromStock', product, params);
    },
    putBackOnShelf(product, params) {
      this.sendAction('putBackOnShelf', product, params);
    }
  }
});
