//imports
const assertArraysEqual = require("./assertArraysEqual");

//function that takes in array and callback function
const map = (array, callback) => {
  //initialize empty array
  const results = [];
  //iterate over input array
  for (let item of array) {
    //push the result of callback on input array item to results array
    results.push(callback(item));
  }
  //return results array
  return results;
}

module.exports = map;
