const eqObjects = function(Object1, Object2) {
  if (Object.keys(Object1).length !== Object.keys(Object2).length) {
    return false;

  } else {

      
    for (let key of Object.keys(Object1)) {
       
      if ((Array.isArray(Object1[key]) && (Object2[key] === false))) {
        return false;
      }
    }
    for (const key in Object2) {
   
      if (!assertEqual(Object1[key], Object2[key])) {
        return false;
      }

    }
    return true;
  }
};

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Paseed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion failed :[${actual}] !=== [${expected}]`);

  }
};


const assertObjectsEqual = function(actual,expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(`Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

let actualobj = { a: '1', b: 2 };
let expectedobj = { b: 2, a: '1' };

assertObjectsEqual(actualobj,expectedobj);