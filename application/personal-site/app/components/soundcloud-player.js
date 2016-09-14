import Ember from 'ember';

const soundcloudApiPrefix = "https%3A//api.soundcloud.com/tracks/";

export default Ember.Component.extend({
    classNames: ['soundcloud-player'],
    apiUrl: Ember.computed('trackID', () => soundcloudApiPrefix + this.get('trackID' + '&amp;')),
});
