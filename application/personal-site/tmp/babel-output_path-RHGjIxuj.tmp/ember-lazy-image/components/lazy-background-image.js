define('ember-lazy-image/components/lazy-background-image', ['exports', 'ember', 'ember-lazy-image/mixins/image-load', 'ember-lazy-image/mixins/lazy-image', 'ember-in-viewport'], function (exports, _ember, _emberLazyImageMixinsImageLoad, _emberLazyImageMixinsLazyImage, _emberInViewport) {
  'use strict';

  var htmlSafe = _ember['default'].String.htmlSafe;
  var computed = _ember['default'].computed;
  var Component = _ember['default'].Component;

  exports['default'] = Component.extend(_emberInViewport['default'], _emberLazyImageMixinsImageLoad['default'], _emberLazyImageMixinsLazyImage['default'], {
    attributeBindings: ['width', 'height', 'style'],

    style: computed('lazyUrl', 'opacity', function () {
      var opacity = this.get('opacity');
      var style = opacity ? 'background-image: linear-gradient(rgba(0, 0, 0, ' + opacity + '), rgba(0, 0, 0, ' + opacity + ')), url(' + this.get('lazyUrl') + ')' : 'background-image: url(' + this.get('lazyUrl') + ')';

      return htmlSafe(style);
    }),

    classNames: ['lazy-background-image'],

    _setupAttributes: function _setupAttributes() {
      var component = this;
      var keys = Object.keys || _ember['default'].keys;

      keys(component).forEach(function (key) {
        if (key.substr(0, 5) === 'data-' && !key.match(/Binding$/)) {
          component.get('attributeBindings').pushObject(key);
        }
      });
    }
  });
});