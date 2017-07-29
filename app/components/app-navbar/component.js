import Ember from 'ember';

const { Component, get, inject: { service } } = Ember;

export default Component.extend({

  session: service(),
  currentUser: service('current-user'),

  localClassNames: 'navbar',

  actions: {
    logout() {
      get(this, 'session').invalidate();
    },
  },

});
