//function that takes in an object and a callback function
const findKey = (obj, callback) => {
  const objKeys = Object.keys(obj);
  //iterate over object keys
  for(let key of objKeys) {
    //if callback function returns true with obj[key] as parameter return key
    if (callback(obj[key])) {
      return key;
    }
  }
}

module.exports = findKey;