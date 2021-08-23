const eqArrays = require('../eqArrays');

const assertArraysEqual = require('../assertArrayEqual');
const assertEqual = require('../assertEqual');


assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

