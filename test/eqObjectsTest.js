const assertEqual = require("../assertEqual");
const eqObjects = require("../eqObjects");

assertEqual(eqObjects({1:1}, {1:1}), true);
assertEqual(eqObjects({1:0}, {1:1}), false);
