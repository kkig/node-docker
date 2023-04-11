var assert = require('assert');
describe('Array', function () {
  const arr = [1, 2, 3];

  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(arr.indexOf(4), -1);
    });

    it('should return value when the value is present', function () {
      assert.equal(arr.indexOf(1), 0);
    });
  });
});
