import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['song-entry'],
    isShowing: false,
    isNotShowing: Ember.computed.not('isShowing'),
    tagType: 'div',
    actions: {
	togglePlayer() {
	    this.toggleProperty('isShowing');
	}
    }

});
