import Ember from 'ember';

const { Component, computed, get } = Ember;

export default Component.extend({

  localClassNames: 'card',

  actions: {
    login() {
      get(this, 'onSubmit')();
    },
  },

});
