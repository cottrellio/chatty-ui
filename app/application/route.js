import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { Route, get, inject: { service } } = Ember;

export default Route.extend( ApplicationRouteMixin, {

  currentUser: service('current-user'),

  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  _loadCurrentUser() {
    return get(this, 'currentUser').load().catch(() => get(this, 'session').invalidate());
  }

});
