(function () {
  require('../src');

  const ProxyAgent = require('proxy-agent');

  describe('api.basic test', () => {
    test('nx.isPlainObject', function () {
      var v1 = { name: 'fei' };
      var v2 = Object.create(null);
      var v3 = function Person() {};
      var v4 = null;
      var v5 = undefined;
      var v6 = 123;
      var v7 = '123';

      expect(nx.isPlainObject(v1)).toBe(true);
      expect(nx.isPlainObject(v2)).toBe(true);
      expect(nx.isPlainObject(v3)).toBe(false);
      expect(nx.isPlainObject(v4)).toBe(false);
      expect(nx.isPlainObject(v5)).toBe(false);
      expect(nx.isPlainObject(v6)).toBe(false);
      expect(nx.isPlainObject(v7)).toBe(false);
    });

    test('node proxy', () => {
      var agent = new ProxyAgent('http://37.232.125.90:8080');
      expect(nx.isPlainObject(agent)).toBe(false);
    });
  });
})();
