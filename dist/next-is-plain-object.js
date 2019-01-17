(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  // https://github.com/reduxjs/react-redux/blob/master/src/utils/isPlainObject.js

  nx.isPlainObject = function(inTarget) {
    var proto, baseProto;
    if (!inTarget || typeof inTarget !== 'object') return false;
    proto = Object.getPrototypeOf(inTarget);
    baseProto = proto;

    if (proto === null) return true;
    while (proto !== null) {
      proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(inTarget) === baseProto;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isPlainObject;
  }
})();
