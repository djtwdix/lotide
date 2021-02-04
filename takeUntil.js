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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected) === true) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

const takeUntil = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (callback(item) === true) {
      return array.slice(0, i);
    }
  }
};

//test cases
/*
const data1 = [1,-3,4];

const results1 = takeUntil(data1, x => x < 0);

const data2 = ["Daniel", ",", "Alex"];
const results2 = takeUntil(data2, x => x === ',');


assertArraysEqual(results1, [1]);
assertArraysEqual(results2, ["Daniel"]);
*/
