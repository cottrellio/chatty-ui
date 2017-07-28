import Ember from 'ember';

const { Controller, get, inject: { service } } = Ember;

export default Controller.extend({

  session: service(),
  currentUser: service('current-user'),

  actions: {
    login() {
      const model = get(this, 'model');

      get(this, 'session').authenticate('authenticator:chatty', get(model, 'email'), get(model, 'password'));
      get(this, 'currentUser').load();
    },
  },

});
