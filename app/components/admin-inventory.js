import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    openEditForm1(params) {
      params.set('editFormOpen', true);
      this.sendAction('openEditForm2', params);
    },
    closeEditForm1(params) {
      params.set('editFormOpen', false);
      this.sendAction('closeEditForm2', params);
    },
    delete1(params) {
      if(confirm("Are you sure you want to delete this item from the invetory?")) {
        this.sendAction('delete2', params);
      }
    },
    update3(product, params) {
      this.sendAction('update4', product, params);
    }
  }
});
