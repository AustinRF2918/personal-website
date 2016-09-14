export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
        "moduleName": "personal-site/templates/components/music-entry.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"style","width: 100% !important;");
        dom.setAttribute(el1,"class","left-half");
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","song-entry-title");
        dom.setAttribute(el2,"href","#");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        dom.setAttribute(el3,"class","song-entry-title");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        dom.setAttribute(el2,"class","song-entry-genre");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h5");
        dom.setAttribute(el2,"class","song-entry-date");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","arrow-container");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        var el3 = dom.createElement("i");
        dom.setAttribute(el3,"class","fa fa-arrow-up fa-4x");
        dom.setAttribute(el3,"artia-hidden","true");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"style","width: 100%;");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element4 = dom.childAt(fragment, [1]);
        var element5 = dom.childAt(fragment, [3, 1]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(element4, [0, 1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element4, [2]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(element4, [4]),0,0);
        morphs[3] = dom.createElementMorph(element5);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [5]),1,1);
        return morphs;
      },
      statements: [
        ["content","this.title",["loc",[null,[3,33],[3,47]]],0,0,0,0],
        ["content","this.genre",["loc",[null,[4,33],[4,47]]],0,0,0,0],
        ["content","this.date",["loc",[null,[5,32],[5,45]]],0,0,0,0],
        ["element","action",["togglePlayer"],[],["loc",[null,[8,7],[8,32]]],0,0],
        ["inline","soundcloud-player",[],["height","250","width","100%","trackID",["subexpr","@mut",[["get","this.ident",["loc",[null,[11,58],[11,68]]],0,0,0,0]],[],[],0,0]],["loc",[null,[11,4],[11,70]]],0,0]
      ],
      locals: [],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 15,
            "column": 0
          },
          "end": {
            "line": 28,
            "column": 0
          }
        },
        "moduleName": "personal-site/templates/components/music-entry.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","flex-box");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","left-half ");
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"class","song-entry-title");
        dom.setAttribute(el3,"href","#");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h3");
        dom.setAttribute(el4,"class","song-entry-title");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        dom.setAttribute(el3,"class","song-entry-genre");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h5");
        dom.setAttribute(el3,"class","song-entry-date");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","right-half");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","song-entry-box");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","song-entry-overlay");
        dom.setAttribute(el4,"href","#");
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","song-entry-icon");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7,"class","fa fa-play");
        dom.setAttribute(el7,"aria-hidden","true");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3, 1]);
        var element3 = dom.childAt(element2, [1, 0, 0]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [0, 1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [2]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [4]),0,0);
        morphs[3] = dom.createAttrMorph(element2, 'style');
        morphs[4] = dom.createElementMorph(element3);
        return morphs;
      },
      statements: [
        ["content","this.title",["loc",[null,[18,33],[18,47]]],0,0,0,0],
        ["content","this.genre",["loc",[null,[19,33],[19,47]]],0,0,0,0],
        ["content","this.date",["loc",[null,[20,32],[20,45]]],0,0,0,0],
        ["attribute","style",["concat",["background-image: url(",["get","this.imgSource",["loc",[null,[23,40],[23,54]]],0,0,0,0],")"],0,0,0,0,0],0,0,0,0],
        ["element","action",["togglePlayer"],[],["loc",[null,[24,78],[24,103]]],0,0]
      ],
      locals: [],
      templates: []
    };
  }());
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
          "line": 30,
          "column": 0
        }
      },
      "moduleName": "personal-site/templates/components/music-entry.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("hr");
      dom.setAttribute(el1,"class","material-break");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["block","liquid-if",[["get","isShowing",["loc",[null,[1,13],[1,22]]],0,0,0,0]],["class","showing-content full-width"],0,null,["loc",[null,[1,0],[13,14]]]],
      ["block","liquid-if",[["get","isNotShowing",["loc",[null,[15,13],[15,25]]],0,0,0,0]],["class","hiding-content full-width"],1,null,["loc",[null,[15,0],[28,14]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));