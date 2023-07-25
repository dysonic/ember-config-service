import { module, test } from 'qunit';
import { setupTest } from 'dummy/tests/helpers';

module('service:config', function (hooks) {
  setupTest(hooks);

  test('it returns values for config paths properly', function (assert) {
    const service = this.owner.lookup('service:config');

    assert.strictEqual(service.testFixtures.foo.bar, 'baz');
  });

  test('it returns undefined for non-existent keys', function (assert) {
    const service = this.owner.lookup('service:config');

    assert.strictEqual(service.missingTestFixtures, undefined);
  });
});
