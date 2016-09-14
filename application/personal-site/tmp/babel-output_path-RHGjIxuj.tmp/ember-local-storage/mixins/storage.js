define('ember-local-storage/mixins/storage', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var storage = {};

  function getStorage(name) {
    var nativeStorage = {};

    if (storage[name]) {
      return storage[name];
    }

    // safari private mode exposes xStorage but fails on setItem
    try {
      nativeStorage = name === 'local' ? localStorage : sessionStorage;
      nativeStorage.setItem('emberlocalstorage.test', 'ok');
      nativeStorage.removeItem('emberlocalstorage.test');
    } catch (e) {
      nativeStorage = {};
    }

    return storage[name] = nativeStorage;
  }

  exports['default'] = _ember['default'].Mixin.create({
    storageKey: null,
    initialContent: null,

    init: function init() {
      var storage = this.storage(),
          storageKey = this.get('storageKey'),
          initialContent = this.get('initialContent'),
          serialized,
          content;

      if (this.get('localStorageKey')) {
        storageKey = this.get('localStorageKey');
        _ember['default'].deprecate('Usage of localStorageKey is deprecated use storageKey instead.');
      }

      if (!storageKey) {
        throw new Error('You must specify which property name should be used to save ' + this + ' in ' + this.get('_storage') + 'Storage by setting its storageKey property.');
      }

      if (!initialContent) {
        throw new Error('You must specify the initialContent.');
      }

      // Retrieve the serialized version from storage using the specified
      // key.
      serialized = storage[storageKey];

      // Merge the serialized version into defaults.
      content = this._getInitialContentCopy();

      if (serialized) {
        _ember['default'].merge(content, JSON.parse(serialized));
      }

      this.set('content', content);

      return this._super.apply(this, arguments);
    },

    save: function save() {
      var storage = this.storage(),
          content = this.get('content'),
          storageKey = this.get('storageKey');

      if (storageKey) {
        storage[storageKey] = JSON.stringify(content);
      }
    },

    storage: function storage() {
      return getStorage(this.get('_storage'));
    },

    _getInitialContentCopy: function _getInitialContentCopy() {
      var initialContent = this.get('initialContent');
      var content = _ember['default'].copy(initialContent, true);
      // Ember.copy returns a normal array when prototype extensions are off
      // This ensures that we wrap it in an Ember Array.
      return _ember['default'].isArray(content) ? _ember['default'].A(content) : content;
    },

    reset: function reset() {
      var content = this._getInitialContentCopy();
      this.set('content', content);
    }
  });
});