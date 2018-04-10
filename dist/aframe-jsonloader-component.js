(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  // global AFRAME 

  if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
  }

  ///
  /// JsonLoader component for A-Frame.
  ///
  AFRAME.registerComponent('jsonloader', {

    schema: {
      url: {type: 'string', default: "" }
    },

    ///
    /// Set if component needs multiple instancing.
    /// 
    multiple: false,

    init: function () {

      let data = this.data;
      let el = this.el;

      // add kids convert from a datastore
      let callback = function(json) {
        for(let i = 0; i < json.length ; i++) {
          let r = json[i];
          let e = document.createElement('a-entity');
          Object.keys(r).forEach(function (key) { 
            let value = r[key];
            e.setAttribute(key,r[key]);
            e.setAttribute(key,r[key]);
          });
          el.appendChild(e);
        }
      };

      // go ahead and ask for the data
      fetch(data.url || "data/sample.json").then(response => response.json()).then(json => callback(json));
    }

  });

})));
