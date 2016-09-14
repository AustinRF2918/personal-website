define('personal-site/components/music-entry', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        classNames: ['song-entry'],
        isShowing: false,
        isNotShowing: _ember['default'].computed.not('isShowing'),
        tagType: 'div',
        actions: {
            togglePlayer: function togglePlayer() {
                this.toggleProperty('isShowing');
            }
        }

    });
});