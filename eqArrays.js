const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      if (eqArrays(arr1[i], arr2[i]) === false) {
        return false;
      }
    }
    if (!Array.isArray && arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//recursion test cases
/*
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false
*/