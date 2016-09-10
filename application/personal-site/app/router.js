import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('web-showcase');
  this.route('etc-showcase');
  this.route('music-showcase');
  this.route('blog');
});

export default Router;
