const tail = require("../tail");
const assertArraysEqual = require("../assertArraysEqual")

assertArraysEqual(tail(["h","e","l","l","o"]), ["e","l","l","o"]);