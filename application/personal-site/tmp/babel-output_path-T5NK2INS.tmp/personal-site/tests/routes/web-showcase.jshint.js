define('personal-site/tests/routes/web-showcase.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/web-showcase.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/web-showcase.js should pass jshint.');
  });
});