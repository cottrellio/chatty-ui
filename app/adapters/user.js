import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  /**
   * Handle `me` request for current-user.
   *
   * @param {Object} query
   * @returns {String} url
   */
  urlForQueryRecord(query) {
    if (query.me) {
      delete query.me;
      return `${this._super(...arguments)}/me`;
    }

    return this._super(...arguments);
  }

});
