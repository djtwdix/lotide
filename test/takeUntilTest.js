const takeUntil = require("../takeUntil");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(takeUntil([1,2,3,4], item => item === 3), [1,2]);
