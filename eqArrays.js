const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Paseed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed :[${actual}] !=== [${expected}]`);
    
  }
};

const eqArrays = function (array1,array2){
  if (array1.length === array2.length){
    return true;
  }
  else{
    return false;
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
