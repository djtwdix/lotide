const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");

assertArraysEqual(map([1,2], x => x * 2), [2,4]);