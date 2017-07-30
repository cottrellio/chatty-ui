import Ember from 'ember';

const { Component, computed, get, set } = Ember;

export default Component.extend({

  localClassNames: 'group',
  localClassNameBindings: ['hasErrors:hasErrors'],
  type: 'text',

  hasErrors: computed('errors.[]', function() {
    const errors = get(this, 'errors') || [];

    return !!errors.length;
  }),

  _errorMessages: computed('errors.[]', function() {
    const errors = get(this, 'errors') || [];
    const msgs = errors.map((e) => {
      return e.message;
    }).join(', ');

    console.log(get(this, 'label'), msgs);

    return msgs;
  }),

});
