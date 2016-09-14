export default Ember.HTMLBars.template((function() {
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
          "line": 12,
          "column": 0
        }
      },
      "moduleName": "modules/ember-deferred-content/templates/components/deferred-content.hbs"
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
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["inline","yield",[["subexpr","hash",[],["pending",["subexpr","component",["deferred-content/pending-content"],["isSettled",["subexpr","@mut",[["get","isSettled",["loc",[null,[1,78],[1,87]]],0,0,0,0]],[],[],0,0]],["loc",[null,[1,22],[1,88]]],0,0],"fulfilled",["subexpr","component",["deferred-content/fulfilled-content"],["isFulfilled",["subexpr","@mut",[["get","isFulfilled",["loc",[null,[2,84],[2,95]]],0,0,0,0]],[],[],0,0],"result",["subexpr","@mut",[["get","content",["loc",[null,[2,103],[2,110]]],0,0,0,0]],[],[],0,0]],["loc",[null,[2,24],[2,111]]],0,0],"rejected",["subexpr","component",["deferred-content/rejected-content"],["isRejected",["subexpr","@mut",[["get","isRejected",["loc",[null,[3,81],[3,91]]],0,0,0,0]],[],[],0,0],"result",["subexpr","@mut",[["get","content",["loc",[null,[3,99],[3,106]]],0,0,0,0]],[],[],0,0]],["loc",[null,[3,23],[3,107]]],0,0],"settled",["subexpr","component",["deferred-content/settled-content"],["isSettled",["subexpr","@mut",[["get","isSettled",["loc",[null,[4,78],[4,87]]],0,0,0,0]],[],[],0,0]],["loc",[null,[4,22],[4,88]]],0,0],"isPending",["get","isPending",["loc",[null,[5,24],[5,33]]],0,0,0,0],"isSettled",["get","isSettled",["loc",[null,[6,24],[6,33]]],0,0,0,0],"isRejected",["get","isRejected",["loc",[null,[7,25],[7,35]]],0,0,0,0],"isFulfilled",["get","isFulfilled",["loc",[null,[8,26],[8,37]]],0,0,0,0],"content",["get","content",["loc",[null,[9,22],[9,29]]],0,0,0,0]],["loc",[null,[1,8],[10,9]]],0,0]],[],["loc",[null,[1,0],[11,2]]],0,0]
    ],
    locals: [],
    templates: []
  };
}()));