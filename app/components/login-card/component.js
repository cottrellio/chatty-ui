import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({

  actions: {
    login() {
      alert('Logging in...');
    },
  },

});
