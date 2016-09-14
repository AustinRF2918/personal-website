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
          "line": 6,
          "column": 0
        }
      },
      "moduleName": "personal-site/templates/blog.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","page-description");
      var el2 = dom.createElement("i");
      dom.setAttribute(el2,"class","fa fa-list fa-5x text-p3");
      dom.setAttribute(el2,"aria-hidden","true");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n      ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h1");
      dom.setAttribute(el2,"class","page-title-header text-p5");
      var el3 = dom.createTextNode("Blog");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n      ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h5");
      dom.setAttribute(el2,"class","page-title-subheader");
      var el3 = dom.createTextNode("A blog that I maintain to organize my thoughts and practice writing occassionally: Often derived from my Org mode files.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n      ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("hr");
      dom.setAttribute(el2,"class","material-break");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes() { return []; },
    statements: [

    ],
    locals: [],
    templates: []
  };
}()));