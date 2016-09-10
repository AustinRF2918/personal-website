define('personal-site/router', ['exports', 'ember', 'personal-site/config/environment'], function (exports, _ember, _personalSiteConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _personalSiteConfigEnvironment['default'].locationType,
    rootURL: _personalSiteConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('web-showcase');
    this.route('etc-showcase');
    this.route('music-showcase');
    this.route('blog');
  });

  exports['default'] = Router;
});