define('personal-site/tests/test-helper', ['exports', 'personal-site/tests/helpers/resolver', 'ember-qunit'], function (exports, _personalSiteTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_personalSiteTestsHelpersResolver['default']);
});