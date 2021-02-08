//imports
const eqArrays = require("./eqArrays")

//Function that takes in two arrays, actual and expected
const assertArraysEqual = function(actual, expected) {
  //if actual and expected are equal print assertion passed statement
  if (eqArrays(actual,expected) === true) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  //if actual and expected are not equal print assertion failed statement
  } else {
    console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual