import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  blurb: DS.attr(),
  price: DS.attr(),
  quantity: DS.attr(),
  description: DS.attr(),
  editFormOpen: DS.attr()
});
