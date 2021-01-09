/*!
 * name: @jswork/next-is-plain-object
 * description: A isPlainObject implement.
 * homepage: https://github.com/afeiship/next-is-plain-object
 * version: 1.0.2
 * date: 2021-01-09 16:31:29
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  // https://github.com/reduxjs/react-redux/blob/master/src/utils/isPlainObject.js
  // https://github.com/jonschlinkert/is-plain-object

  function isObject(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
  }

  nx.isPlainObject = function (inTarget) {
    var ctor, prot;

    if (isObject(inTarget) === false) return false;

    // If has modified constructor
    ctor = inTarget.constructor;
    if (ctor === undefined) return true;

    // If has modified prototype
    prot = ctor.prototype;
    if (isObject(prot) === false) return false;

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
