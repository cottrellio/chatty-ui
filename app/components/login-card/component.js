import Ember from 'ember';

const { Component, get } = Ember;

export default Component.extend({

  localClassNames: 'card',

  actions: {
    login() {
      get(this, 'onSubmit')();
    },
  },

});
