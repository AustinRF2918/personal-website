import Ember from 'ember';
import StorageProxyMixin from './storage';

export default Ember.Mixin.create(StorageProxyMixin, {
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