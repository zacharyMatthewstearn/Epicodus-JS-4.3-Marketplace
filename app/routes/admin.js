import Ember from 'ember';

export default Ember.Route.extend({
  // editFormOpenForReal: false,
  model() {
    return this.store.findAll('product');
  },
  actions: {
    saveProduct5(params) {
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
    },
    delete5(params) {
      params.destroyRecord();
    },
    update5(product, params) {
      product.save();
    },
    // openEditForm3(params) {
    //   this.set('editFormOpenForReal', true);
    //   console.log("editFormOpenForReal: " + this.get('editFormOpenForReal'));
    // }
  }
});
