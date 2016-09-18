define('ember-lazy-image/components/lazy-image', ['exports', 'ember', 'ember-lazy-image/mixins/image-load', 'ember-lazy-image/mixins/lazy-image', 'ember-in-viewport'], function (exports, _ember, _emberLazyImageMixinsImageLoad, _emberLazyImageMixinsLazyImage, _emberInViewport) {
  'use strict';

  var on = _ember['default'].on;
  var get = _ember['default'].get;
  var set = _ember['default'].set;
  var computed = _ember['default'].computed;
  var Component = _ember['default'].Component;

  exports['default'] = Component.extend(_emberInViewport['default'], _emberLazyImageMixinsImageLoad['default'], _emberLazyImageMixinsLazyImage['default'], {
    classNames: ['lazy-image-container'],

    concatenatedProperties: ['class'],

    'class': ['lazy-image'],

    _classJoin: on('init', function () {
      var classArray = get(this, 'class');
      set(this, 'class', classArray.join(' '));
    }),

    _setupAttributes: function _setupAttributes() {
      var img = this.$('img');
      var component = this;
      var keys = Object.keys || _ember['default'].keys;

      keys(component).forEach(function (key) {
        if (key.substr(0, 5) === 'data-' && !key.match(/Binding$/)) {
          img.attr(key, component.get(key));
        }
      });
    },

    useDimensionsAttrs: computed('width', 'height', function () {
      return !this.get('width') || !this.get('height') ? false : true;
    })
  });
});