const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅ Assertion passed: ${actual} === ${expected}`;
  } else {
    return `❌ Assertion failed: ${actual} !== ${expected}`;
  }
};

const tail = function(arr) {
  let tailArr = [];
  for (let i = 1; i < arr.length; i++) {
    tailArr.push(arr[i]);
  } return tailArr;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!