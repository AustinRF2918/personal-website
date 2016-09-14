define('personal-site/routes/music-showcase', ['exports', 'ember', 'ember-infinity/mixins/route'], function (exports, _ember, _emberInfinityMixinsRoute) {
    exports['default'] = _ember['default'].Route.extend(_emberInfinityMixinsRoute['default'], {
        model: function model() {
            return this.infinityModel('music-entry', { perPage: 2, startingPage: 1 });
        }
    });
});