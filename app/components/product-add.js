import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveProduct1() {
      var params = {
        name: this.get('name'),
        image: this.get('image'),
        blurb: this.get('blurb'),
        price: this.get('price'),
        quantity: this.get('quantity'),
        description: this.get('description')
      };
      if(params.name && params.image && params.blurb && params.price && params.quantity && params.description) {
        this.sendAction('saveProduct2', params);
      }
      else {
        alert("Hey admin, you need something in each of those fields there!");
      }
      this.set('name', '');
      this.set('image', '');
      this.set('blurb', '');
      this.set('price', '');
      this.set('quantity', '');
      this.set('description', '');
    }
  }
});
