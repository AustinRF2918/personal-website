define('ember-in-viewport/utils/can-use-dom', ['exports'], function (exports) {
  'use strict';

  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  exports['default'] = canUseDOM;
});