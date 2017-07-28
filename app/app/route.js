import Ember from 'ember';

const { Route, get, inject: { service } } = Ember;

export default Route.extend({

  session: service(),

  beforeModel() {
    if (!get(this, 'session.isAuthenticated')) {
      this.transitionTo('auth.login');
    }
  },

});
