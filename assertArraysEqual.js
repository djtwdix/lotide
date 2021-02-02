const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2) === true) {
    return `✅ Assertion passed: your arrays match`;
  } else {
    return `❌ Assertion failed: you arrays don't match`;
  }
};

console.log(assertArraysEqual([1,2,3], [1,2,3]));
console.log(assertArraysEqual(["1",2,3], [1,2,3]));
