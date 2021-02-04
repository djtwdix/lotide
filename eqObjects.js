const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

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
    //if key value is not an array and values don't match return false
    if (!Array.isArray(obj1[key])) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    
  }
  //else return true
  return true;
};
/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3" }
//console.log(eqObjects(ab, abc));
*/
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false