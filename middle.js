//function that takes in array and returns the middle-most items or item of the array
const middle = function (arr) {
  const middleIndex = arr[Math.floor((arr.length - 1) / 2)];
  //initialize empty middleElements array
  let middleElements = [];
  //if arr length is less than 3 return empty middleElements array
  if (arr.length <= 2) {
    return middleElements;
  }
  //if arr length is odd push middle index of arr 
  if (arr.length % 2 !== 0) {
    middleElements.push(middleIndex);
  //if arr length is even push middleIndex and middleIndex + 1
  } else {
    middleElements.push(middleIndex);
    middleElements.push(middleIndex + 1);
  } 
  // return middleElements
  return middleElements;
};

module.exports = middle;