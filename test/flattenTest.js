const assertArraysEqual = require("../assertArraysEqual");
const flatten = require("../flatten");

assertArraysEqual(flatten([1,2,[3,4]]), [1,2,3,4]);
