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
          "line": 1,
          "column": 327
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
      dom.setAttribute(el1,"scrolling","no");
      dom.setAttribute(el1,"frameborder","no");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var morphs = new Array(3);
      morphs[0] = dom.createAttrMorph(element0, 'width');
      morphs[1] = dom.createAttrMorph(element0, 'height');
      morphs[2] = dom.createAttrMorph(element0, 'src');
      return morphs;
    },
    statements: [
      ["attribute","width",["get","width",["loc",[null,[1,16],[1,21]]],0,0,0,0],0,0,0,0],
      ["attribute","height",["get","height",["loc",[null,[1,33],[1,39]]],0,0,0,0],0,0,0,0],
      ["attribute","src",["concat",["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/",["get","trackID",["loc",[null,[1,154],[1,161]]],0,0,0,0],"&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false&show_artwork=false&"],0,0,0,0,0],0,0,0,0]
    ],
    locals: [],
    templates: []
  };
}()));