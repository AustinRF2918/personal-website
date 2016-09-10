define("personal-site/templates/components/title-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 5,
              "column": 2
            }
          },
          "moduleName": "personal-site/templates/components/title-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "photo-header");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element1, 'src');
          return morphs;
        },
        statements: [["attribute", "src", ["get", "attributes.img", ["loc", [null, [4, 36], [4, 50]]], 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 206
            },
            "end": {
              "line": 6,
              "column": 401
            }
          },
          "moduleName": "personal-site/templates/components/title-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("strong");
          dom.setAttribute(el1, "class", "text-p3");
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" at ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("u");
          dom.setAttribute(el1, "class", "");
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "class", "external-link text-p4");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [2, 0]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
          morphs[1] = dom.createAttrMorph(element0, 'href');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["content", "attributes.education", ["loc", [null, [6, 259], [6, 283]]], 0, 0, 0, 0], ["attribute", "href", ["get", "attributes.schoolUrl", ["loc", [null, [6, 349], [6, 369]]], 0, 0, 0, 0], 0, 0, 0, 0], ["content", "attributes.school", ["loc", [null, [6, 372], [6, 393]]], 0, 0, 0, 0]],
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
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 6
          }
        },
        "moduleName": "personal-site/templates/components/title-header.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "title-description spa-half");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2, "class", "title-header text-p5");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h5");
        dom.setAttribute(el2, "class", "title-subheader text-p4");
        var el3 = dom.createElement("strong");
        dom.setAttribute(el3, "class", "text-p3");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" at ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("u");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "external-link text-p4");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" and ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0]);
        var element3 = dom.childAt(element2, [5]);
        var element4 = dom.childAt(element3, [2, 0]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(element2, 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element3, [0]), 0, 0);
        morphs[3] = dom.createAttrMorph(element4, 'href');
        morphs[4] = dom.createMorphAt(element4, 0, 0);
        morphs[5] = dom.createMorphAt(element3, 4, 4);
        return morphs;
      },
      statements: [["content", "attributes.name", ["loc", [null, [2, 35], [2, 54]]], 0, 0, 0, 0], ["block", "if", [["get", "attributes.img", ["loc", [null, [3, 8], [3, 22]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 2], [5, 9]]]], ["content", "attributes.occupation", ["loc", [null, [6, 62], [6, 87]]], 0, 0, 0, 0], ["attribute", "href", ["get", "attributes.workplaceUrl", ["loc", [null, [6, 143], [6, 166]]], 0, 0, 0, 0], 0, 0, 0, 0], ["content", "attributes.workplace", ["loc", [null, [6, 169], [6, 193]]], 0, 0, 0, 0], ["block", "if", [["get", "attributes.education", ["loc", [null, [6, 212], [6, 232]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [6, 206], [6, 408]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});