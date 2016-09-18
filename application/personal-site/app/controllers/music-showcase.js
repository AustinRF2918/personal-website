import Ember from 'ember';

export default Ember.Controller.extend({
    currentToggledTrack: null,
    actions: {
	notifyController(trackID) {
	    this.set('currentToggledTrack', trackID);
	    console.log("Item toggled: " + this.get('currentToggledTrack'));
	}
    }
});
