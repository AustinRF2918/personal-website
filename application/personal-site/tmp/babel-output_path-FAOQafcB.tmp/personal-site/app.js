define('personal-site/app', ['exports', 'ember', 'personal-site/resolver', 'ember-load-initializers', 'personal-site/config/environment'], function (exports, _ember, _personalSiteResolver, _emberLoadInitializers, _personalSiteConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _personalSiteConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _personalSiteConfigEnvironment['default'].podModulePrefix,
    Resolver: _personalSiteResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _personalSiteConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});