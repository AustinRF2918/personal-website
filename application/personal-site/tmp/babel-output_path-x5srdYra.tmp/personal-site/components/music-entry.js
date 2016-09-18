define('personal-site/components/music-entry', ['exports', 'ember'], function (exports, _ember) {
			exports['default'] = _ember['default'].Component.extend({
						classNames: ['song-entry'],
						isShowing: false,
						playerIsShowing: false,
						isNotShowing: _ember['default'].computed.not('isShowing'),
						tagType: 'div',
						referenceChanged: _ember['default'].observer('activeReference', function () {
									var _this = this;

									if (this.get('ident') === this.get('activeReference')) {

												this.toggleProperty('isShowing');

												_ember['default'].run.later(function () {
															_this.toggleProperty('playerIsShowing');
												}, 651);
									} else {
												this.set('isShowing', false);
												_ember['default'].run.later(function () {
															_this.set('playerIsShowing', false);
												}, 651);
									}
						}),
						actions: {
									togglePlayer: function togglePlayer() {
												if (!this.get('isShowing')) {
															this.sendAction('action', this.get("ident"));
												} else {
															this.sendAction('action', null);
												}
									}
						}

			});
});