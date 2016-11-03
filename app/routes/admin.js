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
      console.log(params.name);
      console.log(params.image);
      console.log(params.blurb);
      console.log(params.price);
      console.log(params.quantity);
      console.log(params.description);
      console.log(params.editFormOpen);
    },
    delete5(params) {
      params.destroyRecord();
    },
    update7(product, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          product.set(key,params[key]);
        }
      });
      product.save();
      console.log("made it");
    },
    // openEditForm3(params) {
    //   this.set('editFormOpenForReal', true);
    //   console.log("editFormOpenForReal: " + this.get('editFormOpenForReal'));
    // }
  }
});
