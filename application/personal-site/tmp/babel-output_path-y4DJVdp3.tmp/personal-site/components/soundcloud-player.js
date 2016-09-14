define('personal-site/components/soundcloud-player', ['exports', 'ember'], function (exports, _ember) {
    var _this = this;

    var soundcloudApiPrefix = "https%3A//api.soundcloud.com/tracks/";

    exports['default'] = _ember['default'].Component.extend({
        classNames: ['soundcloud-player'],
        apiUrl: _ember['default'].computed('trackID', function () {
            return soundcloudApiPrefix + _this.get('trackID' + '&amp;');
        })
    });
});