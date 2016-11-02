import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  admin: DS.attr(),
  cart: DS.attr(),
});
