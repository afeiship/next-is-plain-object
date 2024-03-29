import nx from '@jswork/next';

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

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.isPlainObject;
}

export default nx.isPlainObject;
