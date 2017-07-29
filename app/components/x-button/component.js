import Ember from 'ember';

const { Component, get } = Ember;

export default Component.extend({

  tagName: 'button',
  localClassNames: 'button',
  localClassNameBindings: ['isPrimary:primary', 'isSecondary:secondary', 'isSuccess:success', 'isWarning:warning', 'isError:error', 'isInfo:info'],

  isPrimary: false,
  isSecondary: false,
  isSuccess: false,
  isWarning: false,
  isError: false,
  isInfo: false,

  click() {
    get(this, 'onClick')();
  }

});
