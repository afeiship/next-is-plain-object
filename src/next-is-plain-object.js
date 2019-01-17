(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var isFunction = function(inFn) {
    return typeof inFn === 'function';
  };
  var fnToString = function(inFn) {
    return Function.prototype.toString.call(inFn);
  };

  nx.isPlainObject = function(inTarget) {
    var proto, constructor;
    if (!inTarget || typeof inTarget !== 'object') {
      return false;
    }
    proto = isFunction(inTarget.constructor) ? Object.getPrototypeOf(inTarget) : Object.prototype;
    if (proto === null) {
      return true;
    }
    constructor = proto.constructor;
    return (
      isFunction(constructor) &&
      constructor instanceof constructor &&
      fnToString(constructor) === fnToString(Object)
    );
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isPlainObject;
  }
})();
