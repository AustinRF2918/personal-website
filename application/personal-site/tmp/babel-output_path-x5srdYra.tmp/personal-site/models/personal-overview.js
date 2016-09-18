define('personal-site/models/personal-overview', ['exports', 'ember-data'], function (exports, _emberData) {

    // Not quite neccessary yet: Once we link this
    // up to a REST server it will be however!

    exports['default'] = _emberData['default'].Model.extend({
        name: _emberData['default'].attr(),
        occupation: _emberData['default'].attr(),
        workplace: _emberData['default'].attr(),
        education: _emberData['default'].attr(),
        school: _emberData['default'].attr()
    });
});