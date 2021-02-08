const assert = require('chai').assert;
const head = require("../head");

describe("#head", () => {
  it ("should return 'h' when passed ['h','e','l','l','o']", () => {
    assert.strictEqual(head(["h","e","l","l","o"]), "h");
  });
  it ("should return '5' when passed [5]", () => {
    assert.strictEqual(head([5]), 5);
  });
});
