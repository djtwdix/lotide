const eqArrays = function (arr1, arr2) {
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

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5, 6];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//test cases
/*
const firstLetter = map(words, word => word[0]);
const lastLetter = map(words, word => word[word.length-1])
const timesTwo = map(numbers, number => number * 2)


assertArraysEqual(timesTwo, [2,4,6,8,10,12]);
assertArraysEqual(firstLetter, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(lastLetter, [ 'd', 'l', 'o', 'r', 'm' ]);
*/