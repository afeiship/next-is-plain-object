(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  // https://github.com/reduxjs/react-redux/blob/master/src/utils/isPlainObject.js

  nx.isPlainObject = function (inTarget) {
    if (!inTarget || typeof inTarget !== 'object') return false;

    var proto = Object.getPrototypeOf(inTarget);
    var baseProto = proto;
    if (proto === null) return true;
    var ctor = inTarget.constructor;
    if (typeof ctor !== 'function') return false;

    while (proto !== null) {
      proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(inTarget) === baseProto;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isPlainObject;
  }
})();
