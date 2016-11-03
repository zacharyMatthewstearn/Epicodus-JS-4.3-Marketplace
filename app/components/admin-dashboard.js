import Ember from 'ember';

export default Ember.Component.extend({
  editFormOpenForReal: false,
  // model() {
  //   return this.store.findAll('product');
  // },
  actions: {
    saveProduct3(params) {
      this.sendAction('saveProduct4', params);
    },
    delete3(params) {
      this.sendAction('delete4', params);
    },
    update5(product, params) {
      this.sendAction('update6', product, params);
    },
    openEditForm3(params) {
      this.set('editFormOpenForReal', true);
    },
    closeEditForm3(params) {
      this.set('editFormOpenForReal', false);
    }
  }
});
