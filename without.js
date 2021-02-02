const without = function(arr1, arr2) {
  let output = [];
  for (let i = 0; i < arr1.length; i++) {
    output.push(arr1[i]);
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        output.splice(i, 1)
      }
    }
  }
    return output;
}