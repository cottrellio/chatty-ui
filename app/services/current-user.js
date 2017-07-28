import Ember from 'ember';

const { Service, inject: { service }, get, set, RSVP } = Ember;

export default Service.extend({

  session: service(),
  store: service(),

  load() {
    if (get(this, 'session.isAuthenticated')) {
      return get(this, 'store').queryRecord('user', { me: true })
        .then((user) => {
          set(this, 'user', user);
        });
    }

    return RSVP.resolve();
  },

});
