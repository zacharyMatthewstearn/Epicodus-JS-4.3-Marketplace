import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update1(product) {
      var params = {
        name: this.get('name'),
        image: this.get('image'),
        blurb: this.get('blurb'),
        price: parseFloat(this.get('price')),
        quantity: parseFloat(this.get('quantity')),
        description: this.get('description')
      };
      this.sendAction('update2', product, params);
    }
  }
});
