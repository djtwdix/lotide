//Function takes in two arrays and removes items from the first that exist in the second
const without = function(arr1, arr2) {
  //initialize empty array
  let output = [];
  //pushes all items of arr1 to output array
  for (let i = 0; i < arr1.length; i++) {
    output.push(arr1[i]);
  }
  //iterate over arr1
  for (let i = 0; i < arr1.length; i++) {
    //iterate over arr2
    for (let j = 0; j < arr2.length; j++) {
      //if arr1[i] is equal to arr2[j], splice index i from output array
      if (arr1[i] === arr2[j]) {
        output.splice(i, 1)
      }
    }
  }
  //return output array
    return output;
}

module.exports = without;