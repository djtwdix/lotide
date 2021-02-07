//Function that takes in two parameters, actual and expected
const assertEqual = function(actual, expected) {
  //if actual equals expected print assertion passed statement
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  // if they do not equal print assertion failed statement
  } else {
    console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;