const eqArrays = function (arr1, arr2) {
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

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅ Assertion passed: your arrays match`);
  } else {
    console.log(`❌ Assertion failed: you arrays don't match`);
  }
};

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

const middle = function (arr) {
  let middleElements = [];
  //if arr length is less than 3 return empy middleElements array
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

const myName = ["Daniel", "James", "Tweedie"];
const toSix = [1, 2, 3, 4, 5, 6];
const onlyTwo = ["only", "two"];


//tests
assertArraysEqual(middle(myName), ["James"]);
assertArraysEqual(middle(toSix), [3, 4]);
assertArraysEqual(middle(onlyTwo), []);

