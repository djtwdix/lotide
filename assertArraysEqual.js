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
    console.log(`✅ Assertion passed: your arrays match`);
  } else {
    console.log(`❌ Assertion failed: you arrays don't match`);
  }
};

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual(["1",2,3], [1,2,3]);
