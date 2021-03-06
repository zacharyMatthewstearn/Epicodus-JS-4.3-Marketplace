import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      products: this.store.findAll('product')
    });
  },
  actions: {
    removeFromStock1(product, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          product.set(key,params[key]);
        }
      });
      // product.save();
      console.log("Quantity: " + product.get('quantity'));
    },
    putBackOnShelf(product, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          product.set(key,params[key]);
        }
      });
      // product.save();
      console.log("Quantity: " + product.get('quantity'));
    },
    confirmLogin3() {
      // var temp = this.model();
      // for(var i = 0; i < temp.length; i++) {
      //   this.userArray.push(temp[i]);
      // }
      // console.log(temp);
      // if(!this.get('username') || !this.get('password')){
      //   alert("Both a username and password are required to login, dumbass.");
      // }
      // else if(false/*SOMETHING SOMETHING VALID*/) {
      //   console.log("Logged in!");
      // }
      // else {
      //   alert("Either your username or password is invalid, you reasonable human, you.");
      // }
    }
  }
});
