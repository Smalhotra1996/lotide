
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Paseed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed :[${actual}] !=== [${expected}]`);

  }
}; 

const head = function(array){
  if (array === []){
    return undefined;
  }
  else{
    return array[0];
  }
}


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]));
assertEqual(head([4]),4);

