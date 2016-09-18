define('ember-local-storage/mixins/object', ['exports', 'ember', 'ember-local-storage/mixins/storage'], function (exports, _ember, _emberLocalStorageMixinsStorage) {
  'use strict';

  exports['default'] = _ember['default'].Mixin.create(_emberLocalStorageMixinsStorage['default'], {
    initialContent: {},

    setUnknownProperty: function setUnknownProperty(key, value) {
      this._super(key, value);
      this.save();
    },

    set: function set(key, value) {
      this._super(key, value);
      this.save();
    }
  });
});