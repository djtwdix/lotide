//Function that takes in two arrays and determines whether they are equal
const eqArrays = function(arr1, arr2) {
  //if arrays are not the same length return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  //iterate over arrays
  for (let i = 0; i < arr1.length; i++) {
    //if array1[i] is an array check arr1[i] and arr2[i] for equality using recursion
    if (Array.isArray(arr1[i])) {
      //if the nested arrays are not equal return false
      if (eqArrays(arr1[i], arr2[i]) === false) {
        return false;
      }
    }
    //if arr1[i] is not an array and arr[i] does not equal arr2[i] return false
    if (!Array.isArray(arr1[i]) && arr1[i] !== arr2[i]) {
      return false;
    }
  }
  //otherwise return true
  return true;
};

module.exports = eqArrays;