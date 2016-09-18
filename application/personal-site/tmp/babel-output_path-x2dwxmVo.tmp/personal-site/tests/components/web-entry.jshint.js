define('personal-site/tests/components/web-entry.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/web-entry.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/web-entry.js should pass jshint.');
  });
});