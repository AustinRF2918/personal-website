define('ember-lazy-image/lib/cache', ['exports', 'ember-local-storage/session/object'], function (exports, _emberLocalStorageSessionObject) {
  'use strict';

  exports['default'] = _emberLocalStorageSessionObject['default'].extend({
    storageKey: 'ember-lazy-images'
  });
});