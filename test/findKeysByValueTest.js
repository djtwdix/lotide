const assertEqual = require("../assertEqual");
const findKeyByValue = require("../findKeysByValue");

assertEqual(findKeyByValue({1:2, 3:4}, 4), '3');