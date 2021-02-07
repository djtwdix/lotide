//imports
const assertArraysEqual = require("./assertArraysEqual");

//Function takes in a string and returns an object with the letters as keys 
//and the positions within the string the letter occupies as values
const letterPositions = function(string) {
  //force lowercase on string
  string = string.toLowerCase();
  //initalize empty object
  const positionObject = {};
  //iterate over string
  for (const letter of string) {
    //if letter in string is not a space
    if (letter !== " ") {
      //add letter as key to positionObject with empty array as a value
      positionObject[letter] = [];
    }
  }
  //iterate over string
  for (let i = 0; i < string.length; i++) {
    //if string[i] is not a space and positionObject has string[i] as key, push i to it's array
    if (string[i] !== " " && positionObject[string[i]]) {
      positionObject[string[i]].push(i);
    }
  }
  //return positionObject
  return positionObject;
}

module.exports = letterPositions;