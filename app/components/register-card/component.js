import Ember from 'ember';

const { Component, get } = Ember;

export default Component.extend({

  actions: {
    register() {
      get(this, 'onSubmit')();
    },
  },

});
