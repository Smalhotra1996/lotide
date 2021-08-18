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

const assertEqual = function(array1,array2){
  let actual = eqArrays(array1,array2);
  if(actual){
    console.log(`Assertion passed `);
  }
  else{
    console.log(`Assertion failed`);
  }
}

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
