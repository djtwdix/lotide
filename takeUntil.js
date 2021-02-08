//Function that takes in array and a callback function
const takeUntil = (array, callback) => {
  //iterate over array
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    //callback function returns true with array[i] slice and return the array from 0 to index i
    if (callback(item) === true) {
      return array.slice(0, i);
    }
  }
};

module.exports = takeUntil;