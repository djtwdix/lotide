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
    console.log(`❌ Assertion failed: your arrays don't match`);
  }
};

const letterPositions = function (string) {
  string = string.toLowerCase();
  const positionObject = {};
  //Ommitting spaces initialize each letter as a key in positionObject 
  //with a value of an empty string
  for (const letter of string) {
    if (letter !== " ") {
      positionObject[letter] = [];
    }
  }
  //iterate over string and push index number to the array of the corresponding 
  //letter in positionObject
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      positionObject[string[i]].push(i);
    }
  }
  //return positionObject
  return positionObject;
}

result1 = letterPositions("lighthouse in the house")

//test
assertArraysEqual(result1["n"], [12]);
assertArraysEqual(result1["h"], [3, 5, 15, 18]);