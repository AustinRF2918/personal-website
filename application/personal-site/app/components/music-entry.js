import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['song-entry'],
    isShowing: false,
    isNotShowing: Ember.computed.not('isShowing'),
    tagType: 'div',
    init() {
	this._super();
	console.log(this.get('imgSource'));
    },
    actions: {
	togglePlayer() {
	    this.toggleProperty('isShowing');
	}
    }

});
