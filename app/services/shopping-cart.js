import Ember from 'ember';

export default Ember.Service.extend({
  products: [],
  cartTotalPrice: 0,

  add(product) {
    this.get('products').pushObject(product);
  },

  remove(product) {
    this.get('products').popObject(product);
  },

  addPrice(price) {
    this.set('cartTotalPrice', this.get('cartTotalPrice') + price);
  },

  subtractPrice(price) {
    this.set('cartTotalPrice', this.get('cartTotalPrice') - price);
  }
});
