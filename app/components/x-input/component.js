import Ember from 'ember';

const { Component, computed, get } = Ember;

export default Component.extend({

  classNames: ['input-field'],
  type: 'text',

  _errorMessages: computed('errors.[]', function() {
    const errors = get(Ember, 'errors') || [];

    return errors.join(', ');
  }),

});
