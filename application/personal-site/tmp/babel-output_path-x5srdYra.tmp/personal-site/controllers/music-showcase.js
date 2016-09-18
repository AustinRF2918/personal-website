define('personal-site/controllers/music-showcase', ['exports', 'ember'], function (exports, _ember) {
				exports['default'] = _ember['default'].Controller.extend({
								currentToggledTrack: null,
								actions: {
												notifyController: function notifyController(trackID) {
																this.set('currentToggledTrack', trackID);
																console.log("Item toggled: " + this.get('currentToggledTrack'));
												}
								}
				});
});