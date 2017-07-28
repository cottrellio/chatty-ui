import Ember from 'ember';

const { Component, get } = Ember;

export default Component.extend({

  actions: {
    login() {
      get(this, 'onSubmit')();
    },
  },

});
