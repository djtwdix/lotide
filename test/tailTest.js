const tail = require("../tail");
const assert = require("chai").assert;
const assertArraysEqual = require("../assertArraysEqual")

//assertArraysEqual(tail(["h","e","l","l","o"]), ["e","l","l","o"]);

describe("#tail", () => {
  it ("should return [2,3] when passed in [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });
  it ("should return ['e','l','l','o'] when passed in ['h','e','l','l','o']", () => {
    assert.deepEqual(tail(["h","e","l","l","o"]), ["e","l","l","o"]);
  });
});