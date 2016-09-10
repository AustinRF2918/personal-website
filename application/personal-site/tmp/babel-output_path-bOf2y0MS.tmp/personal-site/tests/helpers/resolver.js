define('personal-site/tests/helpers/resolver', ['exports', 'personal-site/resolver', 'personal-site/config/environment'], function (exports, _personalSiteResolver, _personalSiteConfigEnvironment) {

  var resolver = _personalSiteResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _personalSiteConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _personalSiteConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});