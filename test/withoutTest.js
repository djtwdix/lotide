const without = require("../without");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(without([1,2,3], [2]), [1,3]);