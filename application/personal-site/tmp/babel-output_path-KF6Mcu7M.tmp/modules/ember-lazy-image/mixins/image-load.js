import Ember from 'ember';

var on = Ember.on;
var set = Ember.set;
var run = Ember.run;
var Mixin = Ember.Mixin;
var computed = Ember.computed;
var getWithDefault = Ember.getWithDefault;

export default Mixin.create({
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