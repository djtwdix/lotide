//Function that takes in string and returns object with the letters as keys 
//and the amount of times that letter appears as the value
const countLetters = function (string) {
  //Force lowercase on string, split it at spaces and then join
  string = string.toLowerCase().split(" ").join("")
  //initialize empty object
  const letterCount = {};
  //iterate over string
  for (const letter of string) {
    //if letterCount object has current letter as key already, add one to it's value
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    //if letterCount object does not have current letter as key, add it and value equals one
    } else {
      letterCount[letter] = 1;
    }
  }
  //return letterCount object
  return letterCount;
}

module.exports = countLetters;