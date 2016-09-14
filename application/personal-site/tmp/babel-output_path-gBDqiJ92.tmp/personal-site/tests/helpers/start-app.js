define('personal-site/tests/helpers/start-app', ['exports', 'ember', 'personal-site/app', 'personal-site/config/environment'], function (exports, _ember, _personalSiteApp, _personalSiteConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _personalSiteConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _personalSiteApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});