const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
const middle = require('../middle');



describe("#middle", () =>{
  it("retuens 2 for [1,2,3]", ()=> {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns 3 for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
});




// console.log(middle([1, 2, 3])); // => [2])
// console.log(middle([1, 2, 3, 4, 5]));// => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]


