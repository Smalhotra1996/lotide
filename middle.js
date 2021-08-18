const eqArrays = function(array1,array2) {
  if (array1.length === array2.length) { //are the lists of equal size?
    //yes they are equal in size
    for (let i = 0; i < array1.length; i++) { // are all the items the same
      if (array1[i] !== array2[i]) {
        return false; //we found one set of items not equal
      }
    }
    return true; //all items are the same
  } else {
    //no they are not equal
    return false;
  }
};


const assertEqual = function(array1,array2) {
  let actual = eqArrays(array1,array2);
  if (actual) {
    console.log(`Assertion passed `);
  } else {
    console.log(`Assertion failed`);
  }
};

const middle = function(array) {
  let finalRes = [];
  if (array.length < 3) {
    return finalRes;
  }
  if (array.length % 2 === 0) {
    let middle = array.length / 2;
    finalRes.push(array[middle - 1]);
    finalRes.push(array[middle]);

    return finalRes;
  } else {
       
    let middle = Math.floor(array.length / 2);
    console.log(array[middle]);
        
    finalRes.push(array[middle]);

    return finalRes;
    
  }
};

console.log(middle([1, 2, 3])); // => [2])
console.log(middle([1, 2, 3, 4, 5]));// => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]



