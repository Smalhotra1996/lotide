const assert = require('chai').assert;
//const assertEqual = require('../assertEqual');
const tail = require('../tail');



describe('#tail', () => {
  it("return [\"Lighthouse\",\"Labs\"]", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
    assert.strictEqual(result[0], "Lighthouse");
    assert.strictEqual(result[1], "Labs");
  });
   
});

 

//   it("returns '5' for ['5']", () => {
//     assert.strictEqual(tail(['5']), '5');
//   });



// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

