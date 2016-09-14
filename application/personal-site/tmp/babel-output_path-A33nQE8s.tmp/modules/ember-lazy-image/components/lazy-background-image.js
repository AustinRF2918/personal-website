import Ember from 'ember';
import ImageLoadMixin from '../mixins/image-load';
import LazyImageMixin from '../mixins/lazy-image';
import InViewportMixin from 'ember-in-viewport';

var htmlSafe = Ember.String.htmlSafe;
var computed = Ember.computed;
var Component = Ember.Component;

export default Component.extend(InViewportMixin, ImageLoadMixin, LazyImageMixin, {
  attributeBindings: ['width', 'height', 'style'],

  style: computed('lazyUrl', 'opacity', function () {
    var opacity = this.get('opacity');
    var style = opacity ? 'background-image: linear-gradient(rgba(0, 0, 0, ' + opacity + '), rgba(0, 0, 0, ' + opacity + ')), url(' + this.get('lazyUrl') + ')' : 'background-image: url(' + this.get('lazyUrl') + ')';

    return htmlSafe(style);
  }),

  classNames: ['lazy-background-image'],

  _setupAttributes: function _setupAttributes() {
    var component = this;
    var keys = Object.keys || Ember.keys;

    keys(component).forEach(function (key) {
      if (key.substr(0, 5) === 'data-' && !key.match(/Binding$/)) {
        component.get('attributeBindings').pushObject(key);
      }
    });
  }
});