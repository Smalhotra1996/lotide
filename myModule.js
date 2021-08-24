//const sayHelloTo = require('./myModule');

const sayHelloTo = function(person) {
  console.log(`Hello, ${person}`);
}

module.exports = sayHelloTo;