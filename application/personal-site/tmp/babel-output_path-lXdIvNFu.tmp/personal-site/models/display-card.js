define('personal-site/models/display-card', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        title: _emberData['default'].attr(),
        content: _emberData['default'].attr(),
        path: _emberData['default'].attr()
    });
});