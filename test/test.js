var nx = require('next-js-core2');
require('../src/next-is-plain-object');

test('nx.isPlainObject', function() {
  var v1 = { name: 'fei' };
  var v2 = Object.create(null);
  var v3 = function Person() {};
  var v4 = null;

  expect(nx.isPlainObject(v1)).toBe(true);
  expect(nx.isPlainObject(v2)).toBe(true);
  expect(nx.isPlainObject(v3)).toBe(false);
  expect(nx.isPlainObject(v4)).toBe(false);
});
