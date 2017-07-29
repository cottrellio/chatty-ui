import Ember from 'ember';

const { Controller, computed, get, inject: { service } } = Ember;

export default Controller.extend({

  session: service(),
  currentUser: service('current-user'),

});
