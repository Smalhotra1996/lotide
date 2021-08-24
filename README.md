# Lotide
A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sonammalhotra/lotide`

**Require it:**

`const _ = require('@sonammalhotra/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: assertEqual will check the value if its equal. There are two arguments actual and expected so first should be actual value and second should be you are expecting.

* `assertObjectsEqual(actual,expected)`: This check if two objects are equal or not in this function i used eqobjects as i did use it before.

* `countLetters(sentence)`: It counts all the letters in the sentence if It comes more than once.

* `assertArrayEqual(array1,array2)`: It checks if two arrays are equal or not.

* `eqObjects(object1,object2)`: It checks if two objects of key and value are equal or not.

* `findKey(obj,callback)`: It finds the key in object.

