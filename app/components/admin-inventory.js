import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    openEditForm(params) {
      params.set('editFormOpen', true);
      this.sendAction('openEditForm', params);
    },
    closeEditForm(params) {
      params.set('editFormOpen', false);
    },
    delete1(params) {
      if(confirm("Are you sure you want to delete this item from the invetory?")) {
        this.sendAction('delete2', params);
      }
    }
  }
});
