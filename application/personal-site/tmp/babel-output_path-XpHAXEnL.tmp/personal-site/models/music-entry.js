define('personal-site/models/music-entry', ['exports', 'ember-data'], function (exports, _emberData) {

    // Not quite neccessary yet: Once we link this
    // up to a REST server it will be however!

    exports['default'] = _emberData['default'].Model.extend({
        title: _emberData['default'].attr(),
        genre: _emberData['default'].attr(),
        date: _emberData['default'].attr(),
        imgSource: _emberData['default'].attr(),
        scSource: _emberData['default'].attr()
    });
});
// Implement later: tags: DS.hasMany()