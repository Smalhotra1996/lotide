const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Paseed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion failed :[${actual}] !=== [${expected}]`);

  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: [${actual}] === [${expected}]`);
//   } else {
//     console.log(`Assertion Failed: [${actual}] !== [${expected}] `);
//   }

// };


// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);