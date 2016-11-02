import Ember from 'ember';

export default Ember.Component.extend({
  userArray: [],
  loginMenuOpen: false,
  actions: {
    openLoginMenu() {
      this.set('loginMenuOpen', true);
    },
    closeLoginMenu() {
      this.set('loginMenuOpen', false);
    },
    confirmLogin1() {
      this.sendAction("confirmLogin2");
    }
  }
});
