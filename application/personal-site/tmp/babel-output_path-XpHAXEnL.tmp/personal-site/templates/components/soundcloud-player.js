define("personal-site/templates/components/soundcloud-player", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 288
          }
        },
        "moduleName": "personal-site/templates/components/soundcloud-player.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("iframe");
        dom.setAttribute(el1, "width", "100%");
        dom.setAttribute(el1, "height", "250");
        dom.setAttribute(el1, "scrolling", "no");
        dom.setAttribute(el1, "frameborder", "no");
        dom.setAttribute(el1, "src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/241311128&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});