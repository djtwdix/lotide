//import
const assertEqual = require("./assertEqual");

//Function that takes in array and returns all but the first element
const tail = function(arr) {
  //intialize empty tailArr array
  let tailArr = [];
  //iterate over input array starting at position 1
  for (let i = 1; i < arr.length; i++) {
    //push all array items to tailArr
    tailArr.push(arr[i]);
  } 
  //return tailArr
  return tailArr;
};

module.exports = tail;