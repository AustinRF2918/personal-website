define('ember-lazy-image/mixins/image-load', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var on = _ember['default'].on;
  var set = _ember['default'].set;
  var run = _ember['default'].run;
  var Mixin = _ember['default'].Mixin;
  var computed = _ember['default'].computed;
  var getWithDefault = _ember['default'].getWithDefault;

  exports['default'] = Mixin.create({
    loaded: false,
    errorThrown: false,

    classNameBindings: ['loaded', 'errorThrown'],

    defaultErrorText: computed('errorText', function () {
      return getWithDefault(this, 'errorText', 'Image failed to load');
    }),

    _resolveImage: on('didRender', function () {
      var component = this;
      var image = component.$('img');
      var isCached = image[0].complete;

      if (!isCached) {
        image.one('load', function () {
          image.off('error');
          run.schedule('afterRender', component, function () {
            return set(component, 'loaded', true);
          });
        });

        image.one('error', function () {
          image.off('load');
          run.schedule('afterRender', component, function () {
            return set(component, 'errorThrown', true);
          });
        });
      } else {
        run.schedule('afterRender', component, function () {
          return set(component, 'loaded', true);
        });
      }
    })
  });
});