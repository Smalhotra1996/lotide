
// const assertEqual = function(actual, expected) {

//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Paseed: [${actual}] === [${expected}]`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion failed :[${actual}] !=== [${expected}]`);

//   }
// }; 
const assertEqual = require('./assertEqual');
const head = function(array){
  if (array === []){
    return undefined;
  }
  else{
    return array[0];
  }
}


module.exports = head;

