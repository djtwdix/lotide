//imports
const eqObjects = require("./eqObjects");

//function that takes in two objects, actual and expected
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  //if actual and expected are equal print assertion passed statement
  if (eqObjects(actual,expected) === true) {
    console.log(`✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  //if actual and expected are not equal print assertion failed statement
  } else {
    console.log(`❌ Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;