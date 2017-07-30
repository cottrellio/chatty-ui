import Ember from 'ember';

const { Controller, computed, get, inject: { service } } = Ember;

export default Controller.extend({

  toast: service(),

  actions: {
    register() {
      get(this, 'model').save()
        .then((model) => {
          this.transitionToRoute('auth.login');
          get(this, 'toast').success(`Account registered for ${model.get('alias')}.`);
        })
        .catch((e) => {
          e.errors.forEach((err) => {
            get(this, 'toast').error(err.detail);
          });
        });
    },
  },

});
