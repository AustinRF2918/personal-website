import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
	sendUp() {
	    this.sendAction();
	}
    }
});
