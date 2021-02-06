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

const eqObjects = function(obj1, obj2) {
  const objOneKeys = Object.keys(obj1);
  const objTwoKeys = Object.keys(obj2);
  //if object key lengths don't match return false
  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }
  //iterate through object one keys
  for (const key of objOneKeys) {
    //if key value is an array and arrays are not equal, return false
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    }
    //if key value is object and not array, if objects are not equal, return false
    if (typeof obj1[key] === "object" && !Array.isArray(obj1[key])) {
      if (eqObjects(obj1[key], obj2[key]) === false) {
        return false;
      }
    }
    //if key value is not an array and values don't match return false
    if (!Array.isArray(obj1[key]) && typeof obj1[key] !== "object") {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  //else return true
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected) === true) {
    console.log(`✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
/*
Test
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc);
*/