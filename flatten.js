//imports
const assertEqual = require("./assertEqual")

//function that takes in nested arrays and returns single array
const flatten = function(arr) {
  //initialize empty array
  let flattenedArray = [];
  //iterate over input array
  for (let i = 0; i < arr.length; i++) {
    //if array[i] is array
    if (Array.isArray(arr[i])) {
      //iterate over array[i] and push all elements within to flattenedArray
      for (let j = 0; j < arr[i].length; j++) {
        flattenedArray.push(arr[i][j]);
      }
    //if array[i] is not an array, push arr[i] to flattenedArray
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  //return flattenedArray
  return flattenedArray;
}

module.exports = flatten;