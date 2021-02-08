const assertEqual = require("../assertEqual");
const countLetters = require("../countLetters");

assertEqual(countLetters("Tweedie").e, 3);
assertEqual(countLetters("Apple").p, 2);
assertEqual(countLetters("Daniel").d, 1);