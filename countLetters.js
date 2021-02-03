const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  string = string.toLowerCase().split(" ").join("")
  const letterCount = {};
  for (const letter of string) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
}

// tests

const result1 = countLetters("Daniel Tweedie")

assertEqual(result1["d"], 2)
assertEqual(result1["e"], 4)