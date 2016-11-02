import Ember from 'ember';

export default Ember.Component.extend({
  editFormOpenForReal: false,
  // model() {
  //   return this.store.findAll('product');
  // },
  actions: {
    // saveProduct3(params) {
    //   this.sendAction('saveProduct4', params);
    // },
    delete3(params) {
      this.sendAction('delete4', params);
    },
    // update3(product, params) {
    //   this.sendAction('update4', params);
    // },
    // openEditForm1(params) {
    //   this.sendAction('openEditForm2', params);
    // }
    openEditForm1(params) {
      this.set('editFormOpenForReal', true);
      console.log("editFormOpenForReal: " + this.get('editFormOpenForReal'));
    }
  }
});
