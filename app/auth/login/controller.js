import Ember from 'ember';

const { Controller, computed, get, inject: { service } } = Ember;

export default Controller.extend({

  session: service(),
  currentUser: service('current-user'),

  actions: {
    login() {
      const model = get(this, 'model');

      get(this, 'session').authenticate('authenticator:chatty', get(model, 'email'), get(model, 'password'))
        .then(() => {
          get(this, 'currentUser').load();
        })
        .catch((e) => {
          e.errors.forEach((err) => {
            get(this, 'toast').error(err.detail, `${err.code} ${err.title}`);
          });
        });
    },
  },

});
