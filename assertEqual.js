const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Paseed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion failed :[${actual}] !=== [${expected}]`);

  }
};




module.exports = assertEqual;