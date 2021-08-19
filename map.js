
const eqArrays = function (array1,array2){
  if (array1.length === array2.length){ //are the lists of equal size?
    //yes they are equal in size
    for(let i =0; i<array1.length;i++) { // are all the items the same
      if(array1[i]!==array2[i]){
        return false; //we found one set of items not equal
      }
    }
    return true; //all items are the same
  }
  else{
    //no they are not equal
    return false;
  }
}

const assertArraysEqual = function (array1,array2){
  let actual = eqArrays(array1,array2);

  if (actual) {
      console.log(`Assertion Passed`);
  } else {
      console.log(`Assertion Failed`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array,callback){
  const arr =[];
  for (let item of array){
    arr.push(callback(item));
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');

  }
  // console.log('array', array);
  // console.log('callback', callback);
  
  return arr;

}
const results1 = map(words, word => word[0]);
console.log(results1);
