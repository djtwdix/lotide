//imports
const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

//Function takes in two objects and determines whether they are equal
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
    //if key value is object and not array and those objects are not equal, return false
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

module.exports = eqObjects;