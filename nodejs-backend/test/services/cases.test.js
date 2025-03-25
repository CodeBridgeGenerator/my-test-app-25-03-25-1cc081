const assert = require('assert');
const app = require('../../src/app');

describe('\'cases\' service', () => {
  it('registered the service', () => {
    const service = app.service('cases');

    assert.ok(service, 'Registered the service (cases)');
  });
});
