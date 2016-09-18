define('ember-local-storage/mixins/array', ['exports', 'ember', 'ember-local-storage/mixins/storage'], function (exports, _ember, _emberLocalStorageMixinsStorage) {
  'use strict';

  exports['default'] = _ember['default'].Mixin.create(_emberLocalStorageMixinsStorage['default'], {
    initialContent: _ember['default'].A(),

    replaceContent: function replaceContent(idx, amount, objects) {
      this._super(idx, amount, objects);
      this.save();
    }
  });
});