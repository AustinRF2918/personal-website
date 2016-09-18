define('personal-site/models/music-entry', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        title: _emberData['default'].attr(),
        genre: _emberData['default'].attr(),
        date: _emberData['default'].attr(),
        img: _emberData['default'].attr(),
        ident: _emberData['default'].attr()
    });
});