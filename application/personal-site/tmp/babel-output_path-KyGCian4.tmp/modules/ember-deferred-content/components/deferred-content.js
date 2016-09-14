import Ember from 'ember';
import layout from '../templates/components/deferred-content';

var Component = Ember.Component;
var computed = Ember.computed;
var not = Ember.computed.not;
var get = Ember.get;
var _set = Ember.set;

var DeferredContentComponent = Component.extend({
  layout: layout,
  isPending: not('isSettled'),
  promise: computed({
    set: function set(key, promise) {
      var _this = this;

      _set(this, 'isRejected', false);
      _set(this, 'isFulfilled', false);
      _set(this, 'isSettled', false);
      _set(this, 'content', null);

      promise.then(function (result) {
        if (!get(_this, 'isDestroyed')) {
          _set(_this, 'isFulfilled', true);
          _set(_this, 'content', result);
        }
      }, function (result) {
        if (!get(_this, 'isDestroyed')) {
          _set(_this, 'isRejected', true);
          _set(_this, 'content', result);
        }
      })['finally'](function () {
        if (!get(_this, 'isDestroyed')) {
          _set(_this, 'isSettled', true);
        }
      });

      return promise;
    }
  })
});

DeferredContentComponent.reopenClass({
  positionalParams: ['promise']
});

export default DeferredContentComponent;