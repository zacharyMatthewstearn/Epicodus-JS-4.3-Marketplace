import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update1(product, params) {
      this.sendAction('update2', product, params);
    }
  }
});
