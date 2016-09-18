import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['song-entry'],
    isShowing: false,
    playerIsShowing: false,
    isNotShowing: Ember.computed.not('isShowing'),
    tagType: 'div',
    referenceChanged: Ember.observer('activeReference', function() {
	if (this.get('ident') === this.get('activeReference')) {

	    this.toggleProperty('isShowing');

	    Ember.run.later(() => {
	      this.toggleProperty('playerIsShowing');
	    }, 651);

	} else {
	    this.set('isShowing', false);
	    Ember.run.later(() => {
		this.set('playerIsShowing', false);
	    }, 651);
	}
    }),
    actions: {
	togglePlayer() {
	    if (!this.get('isShowing')) {
	      this.sendAction('action', this.get("ident"));
	    } else {
	      this.sendAction('action', null);
	    }
	}
    }

});





