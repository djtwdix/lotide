//imports
const assertArraysEqual = require("./assertArraysEqual");

//helper functions:

//determine whether array length is even or odd
const isEven = function (arr) {
  return arr.length % 2 === 0;
}

//determine whether array length is greater than 2
const isTwoOrLess = function (arr) {
  return arr.length <= 2;
}

//retrieve middle index of array
const getMiddleIndex = function(arr) { 
  return arr[Math.floor((arr.length - 1) / 2)]
}

//main function:
//function that takes in array and returns the middle-most items or item of the array
const middle = function (arr) {
  //initialize empty middleElements array
  let middleElements = [];
  //if arr length is less than 3 return empty middleElements array
  if (isTwoOrLess(arr)) {
    return middleElements;
  }
  //if arr length is odd push middle index of arr 
  if (!isEven(arr)) {
    middleElements.push(getMiddleIndex(arr));
  }
  //if arr length is odd push middle index and middle index + 1 of arr
  if (isEven(arr)) {
    middleElements.push(getMiddleIndex(arr));
    middleElements.push(getMiddleIndex(arr) + 1);
  }
  // return middleElements
  return middleElements;
};

module.exports = middle;

