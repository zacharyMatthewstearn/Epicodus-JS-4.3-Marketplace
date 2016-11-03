import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    putBackOnShelf(product, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          product.set(key,params[key]);
        }
      });
      // product.save();
      console.log("Quantity: " + product.get('quantity'));
    }
  }
});
