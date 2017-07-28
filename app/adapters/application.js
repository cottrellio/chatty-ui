import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment';

const { JSONAPIAdapter } = DS;
const { computed, get, inject: { service } } = Ember;

export default JSONAPIAdapter.extend({

  session: service(),

  host: config.DS.host,
  namespace: config.DS.namespace,
  authorizer: 'authorizer:oauth2',
  headers: computed('session.authenticated.access_token', function() {
    if (get(this, 'session.isAuthenticated')) {
      return {
        'Authorization': `Bearer ${this.get('session').get('session.content.authenticated.access_token')}`,
      };
    }
  }),

  urlForCreateRecord(modelName/*, snapshot*/) {
    switch(modelName) {
      case 'user':
      case 'users':
        return this._super.apply(this, arguments).replace('users', 'register');
      default:
        return this._super(...arguments);
    }
  },

});
