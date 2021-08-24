

const assertArraysEqual = function (array1,array2){
  let actual = eqArrays(array1,array2);

  if (actual) {
      console.log(`Assertion Passed`);
  } else {
      console.log(`Assertion Failed`);
  }
};

module .exports = assertArraysEqual;

