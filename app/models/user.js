import DS from 'ember-data';
import Ember from 'ember';

const { Model, attr } = DS;
const { computed, get } = Ember;

export default Model.extend({

  email: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  username: attr('string'),
  password: attr('string'),
  passwordConfirmation: attr('string'),

  alias: computed('firstName', 'username', 'email', function() {
    let alias = get(this, 'firstName');

    if (alias === '' || alias === null) {
      alias = get(this, 'username');
    }

    if (alias === '' || alias === null) {
      alias = get(this, 'email');
    }

    return alias;
  }),

});
