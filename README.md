# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @djtwdix/lotide`

**Require it:**

`const _ = require('@djtwdix/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Function that takes in two arrays, actual and expected and asserts whether the are equal or not
* `assertEqual(actual, expected)`: Function that takes in two primitive parameters, actual and expected and asserts whether they are equal or not
* `assertObjectsEqual(actual, expected)`: Function that takes in two objects, actual and expected and asserts whether they are equal or not
* `countLetters(string)`: Function that takes in string and returns object with the letters as keys and the amount of times that letter appears in the string as the value
* `countOnly(allItems, itemsToCount)`: Function that takes in an array (allItems) and an object (itemsToCount) which specifies which items to count in the array by assigning true or false as value to the key (item). Returns an object with the items that have been counted as keys and the amount of times they appear in allItems as the corresponding value.
* `eqArrays(actual, expected)`: Function that takes in two arrays and returns true if they are equal and false if they are not.
* `eqObjects(actual, expected)`: Function that takes in two objects and returns true if they are equal and false if they are not.
* `findKey(object, callback)`: Function that takes in an object and a callback function where the callback function takes in the object's keys as parameters. When the callback function returns true, the function will return the key that yieled the true result.
* `findKeysByValue(object, value)`: Function that takes in an object and a value, it will iterate through the object's keys and when the key value matches the value passed in, it will return the key that contains that value.
* `flatten(nestedarray)`: Function that takes in a single layer nested array and returns a single array with all the same items but without the nesting.
* `head(array)`: Function that takes in an array and returns the item at index 0.
* `tail(array)`: Function that takes in an array and returns all items after index 0.
* `middle(array)`: Function that takes in an array and returns the item at the mid index or mid indexes.
* `letterPositions(string)`: Function that takes in a string and returns an object with the letters as keys and and array of index numbers at which that letter appears in the string as values.
* `map(array, callback)`: Function that takes in an array and callback function and passes each item of that array through the callback function and returns a new array with the results.
* `takeUntil(array, callback)`: Function that takes in an array and callback function and returns everything in the array up until the item that when passed into the callback function returns true.
* `without(array1, array2)`: Function that takes in two arrays and removes items from the first that also exist in the second.

