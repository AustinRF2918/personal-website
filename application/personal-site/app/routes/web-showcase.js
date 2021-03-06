import Ember from 'ember';
import InfinityRoute from 'ember-infinity/mixins/route';

export default Ember.Route.extend(InfinityRoute, {
    model() {
	return this.infinityModel('web-entry', {perPage: 2, startingPage: 1});
    }
});
