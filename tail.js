const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Paseed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed :[${actual}] !=== [${expected}]`);

  }
}; 

const tail = function(array){
  const narray = array.slice(1);
  return narray;
}

module.exports = tail;

