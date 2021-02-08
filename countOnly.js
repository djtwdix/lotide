//Function takes in an array and an object
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  //initialize empty object
  const results = {}
  //iterate over allItems array
  for (const item of allItems) {
    //if itemsToCount object has current array item as a key and is true, check if results object also has it
    if (itemsToCount[item]) {
      //if result object has current array item as a key then add 1 to it's value
      if (results[item]) {
        results[item] += 1;
      //if result object does not have current array item as a key then add it and set value to 1;
      } else {
        results[item] = 1;
      }
    }
  }
  //return results object
  return results;
}

module.exports = countOnly;

console.log(countOnly([1,2,1,3,4], {1: true, 2: false, 3: true, 4: false}))