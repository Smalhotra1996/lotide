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


const withOut = function(source, itemsToRemove) {
  let result = [];
  let inList = false;

  for (let value1 of source) {
    
    for (let value2 of itemsToRemove) { //loop through all the values in the itemsToRemove list
      
      if (value1 === value2) { //check if the current value1 equal to current value2
        inList = true; //set flag to true to indicate that value1 was found in the list itemsToRemove
      }//end if

    }//end for

    if (inList === false) { //check did we find value1 in the list itemsToRemove
      result.push(value1); //add
    }

    inList = false; //reset flag
  }
  return result;
};


console.log(withOut([1, 2, 3], [1])); // => [2, 3]
console.log(withOut(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]










const assertEqual = function(array1,array2) {
  let actual = eqArrays(array1,array2);
  if (actual) {
    console.log(`Assertion passed `);
  } else {
    console.log(`Assertion failed`);
  }
};

