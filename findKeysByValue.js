//imports
const assertEqual = require("./assertEqual");

//Function that takes in an object and a value
const findKeyByValue = function(obj, val) {
  //get keys from object
  const getKeys = Object.keys(obj);
  //iterate over object keys
  for (const key of getKeys) {
    //if obj[key] is equal to the value, return the key
    if (obj[key] === val) {
      return key;
    }
  }
}

module.exports = findKeyByValue;