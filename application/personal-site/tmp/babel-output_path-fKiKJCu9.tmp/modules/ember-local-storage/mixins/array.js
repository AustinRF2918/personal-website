import Ember from 'ember';
import StorageProxyMixin from './storage';

export default Ember.Mixin.create(StorageProxyMixin, {
  initialContent: Ember.A(),

  replaceContent: function replaceContent(idx, amount, objects) {
    this._super(idx, amount, objects);
    this.save();
  }
});