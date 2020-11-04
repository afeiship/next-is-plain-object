/*!
 * name: @feizheng/next-is-plain-object
 * description: A isPlainObject implement.
 * homepage: https://github.com/afeiship/next-is-plain-object
 * version: 1.0.2
 * date: 2020-11-04T01:27:48.001Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  // https://github.com/reduxjs/react-redux/blob/master/src/utils/isPlainObject.js
  // https://github.com/jonschlinkert/is-plain-object

  function isObject(val) {
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
  }

  function isObjectObject(o) {
    return isObject(o) === true && Object.prototype.toString.call(o) === '[object Object]';
  }

  nx.isPlainObject = function (inTarget) {
    var ctor, prot;

    if (!inTarget || typeof inTarget !== 'object') return false;
    if (Object.getPrototypeOf(inTarget) === null) return true;
    if (isObjectObject(inTarget) === false) return false;

    // If has modified constructor
    ctor = inTarget.constructor;
    if (typeof ctor !== 'function') return false;

    // If has modified prototype
    prot = ctor.prototype;
    if (isObjectObject(prot) === false) return false;

    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty('isPrototypeOf') === false) {
      return false;
    }

    // Most likely a plain Object
    return true;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isPlainObject;
  }
})();

//# sourceMappingURL=next-is-plain-object.js.map
