define('ember-lazy-image/mixins/lazy-image', ['exports', 'ember', 'ember-lazy-image/lib/cache'], function (exports, _ember, _emberLazyImageLibCache) {
  'use strict';

  var on = _ember['default'].on;
  var get = _ember['default'].get;
  var set = _ember['default'].set;
  var Mixin = _ember['default'].Mixin;
  var computed = _ember['default'].computed;
  var setProperties = _ember['default'].setProperties;

  var dasherize = _ember['default'].String.dasherize;

  exports['default'] = Mixin.create({
    didInsertElement: function didInsertElement() {
      setProperties(this, {
        viewportScrollSensitivity: 20,
        viewportListeners: [{ context: window, event: 'scroll.scrollable' }, { context: window, event: 'resize.resizable' }, { context: document, event: 'touchmove.scrollable' }]
      });

      this._super.apply(this, arguments);
    },

    _cache: _emberLazyImageLibCache['default'].create(),

    lazyUrl: null,

    handleDidRender: on('didRender', function () {
      this._setupAttributes();
    }),

    handleImageUrl: on('didInitAttrs', function () {
      this._setImageUrl();
    }),

    _setImageUrl: on('didEnterViewport', function () {
      var url = get(this, 'url');
      var cache = get(this, '_cache');
      var lazyUrl = get(this, 'lazyUrl');
      var cacheKey = get(this, '_cacheKey');
      var viewportEntered = get(this, 'viewportEntered');

      if (cacheKey && get(cache, cacheKey)) {
        set(this, 'lazyUrl', url);
      }

      if (viewportEntered && lazyUrl === null) {
        set(this, 'lazyUrl', url);

        if (cacheKey) {
          set(cache, cacheKey, true);
        }
      }
    }),

    _cacheKey: computed('url', function () {
      var url = this.get('url');
      var key;

      if (url) {
        key = dasherize(url.replace(/^http[s]?\:\/\/|\.|\//g, ''));
      }

      if (key) {
        return key;
      }
    })
  });
});