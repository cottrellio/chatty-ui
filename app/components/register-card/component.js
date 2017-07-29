import Ember from 'ember';

const { Component, get } = Ember;

export default Component.extend({

  localClassNames: 'card',

  actions: {
    register() {
      get(this, 'onSubmit')();
    },
  },

});
