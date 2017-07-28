import Ember from 'ember';

const { Controller, get, inject: { service } } = Ember;

export default Controller.extend({

  session: service(),
  currentUser: service('current-user'),

  actions: {
    logout() {
      get(this, 'session').invalidate();
    },
  },

});
