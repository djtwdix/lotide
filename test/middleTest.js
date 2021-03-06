const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () => {
  it ("should return [3] when passed in [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
  it ("should return [3, 4] when passed in [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
});
