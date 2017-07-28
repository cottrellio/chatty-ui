import Ember from 'ember';

const { Controller, get } = Ember;

export default Controller.extend({

  actions: {
    register() {
      get(this, 'model').save()
        .then(() => {
          this.transitionToRoute('auth.login');
        });
    },
  },

});
