define("personal-site/templates/music-showcase", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 2
              },
              "end": {
                "line": 9,
                "column": 2
              }
            },
            "moduleName": "personal-site/templates/music-showcase.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "personal-site/templates/music-showcase.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "music-entry", [], ["title", ["subexpr", "@mut", [["get", "entry.title", ["loc", [null, [8, 23], [8, 34]]], 0, 0, 0, 0]], [], [], 0, 0], "genre", ["subexpr", "@mut", [["get", "entry.genre", ["loc", [null, [8, 41], [8, 52]]], 0, 0, 0, 0]], [], [], 0, 0], "date", ["subexpr", "@mut", [["get", "entry.date", ["loc", [null, [8, 58], [8, 68]]], 0, 0, 0, 0]], [], [], 0, 0], "imgSource", ["subexpr", "@mut", [["get", "entry.img", ["loc", [null, [8, 79], [8, 88]]], 0, 0, 0, 0]], [], [], 0, 0], "ident", ["subexpr", "@mut", [["get", "entry.ident", ["loc", [null, [8, 95], [8, 106]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [8, 2], [9, 18]]]]],
        locals: ["entry"],
        templates: [child0]
      };
    })();
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
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "personal-site/templates/music-showcase.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "page-description");
        var el2 = dom.createElement("i");
        dom.setAttribute(el2, "class", "fa fa-music fa-5x text-p3");
        dom.setAttribute(el2, "aria-hidden", "true");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2, "class", "page-title-header text-p5");
        var el3 = dom.createTextNode("Music");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h5");
        dom.setAttribute(el2, "class", "page-title-subheader");
        var el3 = dom.createTextNode("Music that I have made or remixed: Nothing professional.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("hr");
        dom.setAttribute(el2, "class", "material-break");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [7, 8], [7, 13]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [7, 0], [10, 9]]]], ["inline", "infinity-loader", [], ["infinityModel", ["subexpr", "@mut", [["get", "model", ["loc", [null, [12, 32], [12, 37]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [12, 0], [12, 39]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});